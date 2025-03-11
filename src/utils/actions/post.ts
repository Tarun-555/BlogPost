"use server";
import { createPostQuery, getAllPostsQuery } from "./../queries/post";
import { pool } from "./../db";
import { redirect } from "next/navigation";
import { z, ZodIssue } from "zod";

const createPostSchema = z.object({
  title: z.string().min(5).max(20),
  content: z.string().min(10).max(200),
  imageurl: z.string().min(10) && z.string().includes("http"),
});

const createPost = async (
  state: { errors: ZodIssue[] } | undefined,
  payload: FormData
) => {
  const data = payload;
  console.log("Creating post");

  const validation = createPostSchema.safeParse({
    title: data.get("title"),
    content: data.get("content"),
    imageurl: data.get("imageurl"),
  });

  console.log(data, "---", validation.error);

  try {
    if (validation.success) {
      const post = await pool.query(createPostQuery, [
        data.get("title"),
        data.get("content"),
        data.get("imageurl"),
        0,
        0,
        { id: 1, name: "John Doe" },
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
  "use server";
  console.log("Getting all posts");
  try {
    const posts = await pool.query(getAllPostsQuery);
    return posts.rows;
  } catch (err) {
    console.error(err);
    return;
  }
};

export { getAllPosts, createPost };
