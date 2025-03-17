"use client";
import React, { useState, useActionState } from "react";
import Form from "next/form";
// import { useFormState } from "react-dom";
import { createPost } from "../utils/actions/post";
import MdEditor from "@uiw/react-md-editor";

export const PostForm = () => {
  const [content, setContent] = useState("");
  const bindContentToCreatePost = createPost.bind(null, { content });
  const [state, formAction] = useActionState(bindContentToCreatePost, {
    errors: [],
  });

  const handleContentChange = (value?: string) => {
    if (value !== undefined) {
      setContent(value);
    }
  };

  console.log("from post form:", content);

  return (
    <Form
      id="post-form"
      action={formAction}
      className="mt-5 flex flex-col items-center gap-8 py-6 w-[100%]"
    >
      <div className="flex items-center gap-10 w-[80%] flex-col sm:flex-row">
        <div className="flex flex-col sm:w-[calc(100%/2)] w-[80%]">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className=" px-4 py-2 rounded-2xl border-b-black border-2  relative bg-amber-50"
          />
          <span className=" text-red-500 mx-2.5">
            {state?.errors?.find((e) => "title" in e)?.["title"]}
          </span>
        </div>
        <div className="flex flex-col sm:w-[calc(100%/2)] w-[80%]">
          <input
            type="text"
            name="imageurl"
            placeholder="Image URL"
            className="px-4 py-2 rounded-2xl border-b-black border-2  relative bg-amber-50"
          />
          <span className=" text-red-500 mx-2.5">
            {state?.errors?.find((e) => "imageurl" in e)?.["imageurl"]}
          </span>
        </div>
      </div>
      <div className="flex flex-col w-[80%]">
        <MdEditor
          value={content}
          textareaProps={{
            placeholder: "Here goes the content for your post...",
            style: {
              color: "#000",
            },
          }}
          height={300}
          onChange={handleContentChange}
          style={{ background: "oklch(.987 .022 95.277)" }}
          className="*:!bg-amber-50 [&_.wmde-markdown]:!bg-amber-50 [&_.wmde-markdown-color]:!text-black [&_tr]:!bg-amber-50"
        />
        <span className=" text-red-500 mx-2.5">
          {state?.errors?.find((e) => "content" in e)?.["content"]}
        </span>
      </div>
      <div className="flex sm:w-[80%]">
        <div className="flex gap-6 items-center sm:flex-row flex-col">
          <div className="flex flex-col">
            <textarea
              name="description"
              placeholder="short description"
              className="w-[100%] md:w-[300px] lg:w-[500px] h-[50px] px-4 py-2 rounded-2xl border-b-black border-2  relative bg-amber-50 "
            />
            <span className=" text-red-500 mx-2.5">
              {state?.errors?.find((e) => "description" in e)?.["description"]}
            </span>
          </div>

          <button
            type="submit"
            id="pf-btn"
            className="w-[250px] bg-amber-600 p-3 rounded-sm text-sm font-semibold uppercase cursor-pointer hover:bg-amber-700 text-amber-50"
          >
            Save Post
          </button>
        </div>
      </div>
    </Form>
  );
};
