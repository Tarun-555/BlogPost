"use client";
import React, { useState } from "react";
import Form from "next/form";
import { useFormState } from "react-dom";
import { createPost } from "../utils/actions/post";
import MdEditor from "@uiw/react-md-editor";

export const PostForm = () => {
  const [state, formAction] = useFormState(createPost, { errors: [] });
  const [content, setContent] = useState("");

  const handleContentChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    console.log(e, value);
    setContent(e);
  };

  console.log("from post form:", state);

  return (
    <Form
      action={formAction}
      className="mt-10 flex flex-col items-center gap-8"
    >
      <div className="flex items-center gap-10">
        <div className="flex flex-col w-[calc(100%/2)]">
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
        <div className="flex flex-col  w-[calc(100%/2)]">
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
      </div>
      <div className="flex flex-col  w-[calc(100%/1.5)]">
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
          className="*:!bg-amber-50 [&_.w-md-editor-toolbar]:!bg-black [&_.wmde-markdown]:!bg-amber-50 [&_.wmde-markdown-color]:!text-black"
        />
        <span className=" text-red-500 mx-2.5">
          {state?.errors?.find((e) => "content" in e)?.["content"]}
        </span>
      </div>
      <div className="flex">
        <div className="flex gap-10 items-center">
          <textarea
            name="description"
            placeholder="description"
            className="w-[480] h-[50px] px-4 py-2 rounded-2xl border-b-black border-2  relative bg-amber-50 "
          />
          <span className=" text-red-500 mx-2.5">
            {state?.errors?.find((e) => "content" in e)?.["description"]}
          </span>

          <button
            type="submit"
            className="w-[250px] bg-amber-600 p-3 rounded-sm text-sm font-semibold uppercase cursor-pointer hover:bg-amber-700 text-amber-50"
          >
            Save Post
          </button>
        </div>
      </div>
    </Form>
  );
};
