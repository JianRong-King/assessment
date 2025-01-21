import { Link } from 'react-router-dom';

export default function DisplayData({ currentItems }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white">
      <div
        id="displayItems"
        className="p-6 flex flex-wrap justify-center bg-gray-50"
      >
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-lg p-6 mb-6 mx-4 w-full md:w-2/3 lg:w-1/2 shadow-md hover:shadow-lg  transition-transform duration-300 transform hover:scale-105"
          >
            <ul>
              <div
                id="postHeader"
                className="flex items-center mb-4 bg-blue-500 p-3 rounded-lg"
              >
                <img
                  alt="Author"
                  src={item.author.avatar}
                  className="w-12 h-12 rounded-full mr-4 border-2 border-white"
                />
                <div>
                  <li className="font-bold text-xl text-white mb-1">
                    {item.title}
                  </li>
                  <li className="text-gray-200">
                    <span className="bg-blue-700 p-2 rounded-full text-sm">
                      {item.author.name}
                    </span>
                  </li>
                </div>
              </div>
              <li className="text-gray-500 mb-2">
                Publish Date: {item.publishDate}
              </li>
              <li className="text-gray-700 mb-4 overflow-hidden text-ellipsis">
                Post Summary: {item.summary}
              </li>

              <Link
                to={`/posts/${item.id}`}
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Details
              </Link>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
