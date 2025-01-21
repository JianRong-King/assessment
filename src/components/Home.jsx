import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Home</h1>
      <p>Welcome to the home page</p>
      <Link to="/posts">Check out the new posts</Link>
    </div>
  );
}
