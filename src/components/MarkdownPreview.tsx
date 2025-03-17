"use client";

import MDPreview from "@uiw/react-markdown-preview";

const MarkdownPreview = ({ content }: { content: string }) => {
  return (
    <MDPreview
      source={content}
      className="[&_tr]:!bg-white"
      style={{
        background: "#fff",
        color: "#000",
      }}
    />
  );
};

export default MarkdownPreview;
