"use client";
import Form from "next/form";
import { useFormState } from "react-dom";
import { createPost } from "../utils/actions/post";

export const PostForm = () => {
  const [state, formAction] = useFormState(createPost, { errors: [] });

  console.log("from post form:", state);

  return (
    <Form
      action={formAction}
      className="mt-10 flex flex-col items-center gap-8"
    >
      <div className="flex flex-col">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="w-[440] px-4 py-2 rounded-2xl border-b-black border-2  relative bg-amber-50"
        />
        <span className=" text-red-500 mx-2.5">
          {state?.errors?.find((e) => "title" in e)?.["title"]}
        </span>
      </div>
      <div className="flex flex-col">
        <textarea
          name="content"
          placeholder="Content"
          className="w-[440] px-4 py-2 rounded-2xl border-b-black border-2  relative bg-amber-50"
        />
        <span className=" text-red-500 mx-2.5">
          {state?.errors?.find((e) => "content" in e)?.["content"]}
        </span>
      </div>
      <div className="flex flex-col">
        <input
          type="text"
          name="imageurl"
          placeholder="Image URL"
          className="w-[440] px-4 py-2 rounded-2xl border-b-black border-2  relative bg-amber-50"
        />
        <span className=" text-red-500 mx-2.5">
          {state?.errors?.find((e) => "imageurl" in e)?.["imageurl"]}
        </span>
      </div>
      <button
        type="submit"
        className="bg-amber-600 px-3.5 py-2.5 rounded-sm text-xs font-semibold uppercase cursor-pointer hover:bg-amber-700"
      >
        Create Post
      </button>
    </Form>
  );
};
