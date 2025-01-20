import React from 'react';

export default function Button({ setCurrentPage, currentPage, maxPages }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center space-x-4 z-50 bg-white p-4 shadow-md mt-4">
      <button
        onClick={() => {
          setCurrentPage((prev) => prev - 1);
        }}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
      >
        Previous Page
      </button>
      <button
        onClick={() => {
          setCurrentPage((prev) => prev + 1);
        }}
        disabled={currentPage === maxPages}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
      >
        Next Page
      </button>
    </div>
  );
}
