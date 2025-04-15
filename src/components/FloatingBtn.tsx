"use client";

import React from "react";
import Button from "./Button";
import { ArrowUp } from "react-feather";

const FloatingBtn = () => {
  const handleScrollToTop = () => {
    document.getElementById("search-banner")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="fixed bottom-4 right-4">
      <Button
        onClick={handleScrollToTop}
        cls="bg-black text-white p-3 rounded-full shadow-lg hover:bg-black-300 transition duration-300 cursor-pointer"
      >
        <ArrowUp size={24} />
      </Button>
    </div>
  );
};

export default FloatingBtn;
