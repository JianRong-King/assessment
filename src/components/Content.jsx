import React, { useEffect, useState } from 'react';

export default function Content() {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/posts');
      const responseJson = await response.json();
      //   console.log(responseJson.posts);
      return responseJson.posts;
    };
    fetchData().then((data) => setData(data));
  }, []);

  useEffect(() => {
    setDisplayData(data);
  }, [data]); // when need to change the display data

  return (
    <div>
      {displayData.map((item) => (
        <ul key={item.id}>
          <img src={item.author.avatar} />
          <li>{item.title}</li>
          <li>{item.author.name}</li>
          <li>{item.publishDate}</li>
          <li>{item.summary}</li>
        </ul>
      ))}
    </div>
  );
}
