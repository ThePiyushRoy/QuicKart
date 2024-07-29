import React, { useState } from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const [activeButton, setActiveButton] = useState(null);

  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
      <nav className="flex items-center justify-center  mb-4">
        {pages.map((page) => {
          return (
            <button
              key={page}
              onClick={() => {
                setCurrentPage(page);
                setActiveButton(page);
              }}
              className={`cursor-pointer shadow-lg px-4 py-2 text-md font-semibold ring-1 ring-inset ring-gray-300 hover:bg-blue-400 ${
                activeButton === page
                  ? "text-white bg-blue-500"
                  : "text-gray-900"
              }`}
            >
              {page}
            </button>
          );
        })}
      </nav>
    </>
  );
};

export default Pagination;
