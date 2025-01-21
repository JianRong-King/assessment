import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to Lizard Assement</h1>
      <p className="text-lg mb-8">By King Jian Rong</p>
      <Link
        to="/posts"
        className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
      >
        Check out All the posts
      </Link>
    </div>
  );
}
