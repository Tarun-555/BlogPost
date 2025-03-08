"use client";
import Link from "next/link";
import React from "react";
import * as Icon from "react-feather";

interface SearchProps {
  query: string;
  btnType: "button" | "submit" | "reset";
}

const Search: React.FC<SearchProps> = ({ query, btnType }) => {
  return (
    <div>
      {query && (
        <div>
          <Link href={"/"}>
            <Icon.X
              className="absolute top-[10] right-[40]"
              onClick={() => {
                const form = document.querySelector(
                  ".search-form"
                ) as HTMLFormElement;
                if (form) {
                  form.reset();
                }
              }}
            />
          </Link>
        </div>
      )}
      <button type={btnType} className="cursor-pointer">
        <Icon.Search className="absolute top-[10] right-[10]" />
      </button>
    </div>
  );
};

export default Search;
