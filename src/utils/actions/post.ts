"use server";
import {
  createPostQuery,
  getAllPostsQuery,
  getPostByIdQuery,
} from "./../queries/post";
import { pool } from "./../db";
import { redirect } from "next/navigation";
import { z, ZodIssue } from "zod";
import { auth } from "../../../auth";
import { getUserInfoByEmail } from "./user";

const createPostSchema = z.object({
  title: z.string().min(5),
  description: z.string().min(10),
  imageurl: z.string().min(10) && z.string().includes("http"),
  content: z.string().min(50),
});

const createPost = async (
  val: { content: string },
  state: { errors: ZodIssue[] } | undefined,
  payload: FormData
) => {
  const data = payload;
  const session = await auth();
  const user = await getUserInfoByEmail(session?.user?.email as string);
  console.log("Creating post", data, val, user);

  const validation = createPostSchema.safeParse({
    title: data.get("title"),
    description: data.get("description"),
    imageurl: data.get("imageurl"),
    content: val.content,
  });

  console.log(data, "---", validation.error);

  try {
    if (validation.success) {
      const post = await pool.query(createPostQuery, [
        data.get("title"),
        data.get("description"),
        data.get("imageurl"),
        val.content,
        0,
        0,
        user.user_id,
        new Date(),
      ]);
      console.log("post", post);
    } else {
      const errors: { [key: string]: string }[] = [];
      validation?.error.issues.map((err) => {
        const obj: { [key: string]: string } = {};
        obj[err.path[0]] = err.message;
        errors.push(obj);
      });
      return {
        errors,
        prevInputs: {
          title: data.get("title") as string,
          description: data.get("description") as string,
          imageurl: data.get("imageurl") as string,
          content: val.content,
        },
      };
    }
  } catch (err) {
    console.error(err);
  } finally {
    if (validation.success) {
      redirect("/");
    }
  }
};

const getAllPosts = async () => {
  console.log("Getting all posts");
  try {
    const posts = await pool.query(getAllPostsQuery);
    return posts.rows;
  } catch (err) {
    console.error(err);
    return;
  }
};

const getPostById = async (id: number) => {
  try {
    const post = await pool.query(getPostByIdQuery, [id]);
    console.log("Getting post by id:", id, post);
    return post.rows[0];
  } catch (err) {
    console.error(err);
    return;
  }
};

export { getAllPosts, createPost, getPostById };
