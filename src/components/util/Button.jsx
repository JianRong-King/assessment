import React from 'react';

export default function Button({ setCurrentPage, currentPage, maxPages }) {
  return (
    <>
      <button
        onClick={() => {
          setCurrentPage((prev) => prev - 1);
        }}
        disabled={currentPage === 1}
      >
        Previous Page
      </button>
      <button
        onClick={() => {
          setCurrentPage((prev) => prev + 1);
        }}
        disabled={currentPage === maxPages}
      >
        Next Page
      </button>
    </>
  );
}
