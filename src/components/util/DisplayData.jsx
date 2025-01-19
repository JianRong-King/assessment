export default function DisplayData({ currentItems }) {
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
    </div>
  );
}
