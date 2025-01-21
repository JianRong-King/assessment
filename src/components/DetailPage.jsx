import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function DetailPage() {
  const params = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${params.postId}`);
        const responseJson = await response.json();
        return responseJson;
      } catch (error) {
        console.log('Error fetching post:', error);
      }
    };

    fetchPost().then((data) => setPost(data));
  }, [params]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center py-10">
      {post && (
        <div className="bg-white shadow-2xl rounded-lg p-8 mb-6 w-full md:w-2/3 lg:w-1/2">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 text-center">
            {post.title}
          </h1>
          <p className="text-xl text-gray-700 mb-6 text-center">
            {post.author.name}
          </p>
          <div className="flex items-center justify-center mb-6 ">
            <img
              alt="Author"
              src={post.author.avatar}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <ul className="space-y-4">
            <li className="text-gray-700">
              <span className="font-semibold">Publish Date:</span>{' '}
              {post.publishDate}
            </li>
            <li className="text-gray-800">
              <span className="font-semibold">Post Summary:</span>{' '}
              {post.summary}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
