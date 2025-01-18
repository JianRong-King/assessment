import React, { useEffect, useState } from 'react';

export default function Content() {
  const [data, setData] = useState([]);

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const maxPages = Math.ceil(data.length / itemsPerPage);

  const currentItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/posts');
      const responseJson = await response.json();

      return responseJson.posts;
    };
    fetchData().then((data) => setData(data));
  }, []);

  return (
    <div>
      {currentItems.map((item) => (
        <ul key={item.id}>
          <img alt="Author" src={item.author.avatar} />
          <li>{item.title}</li>
          <li>{item.author.name}</li>
          <li>{item.publishDate}</li>
          <li>{item.summary}</li>
        </ul>
      ))}

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
    </div>
  );
}
