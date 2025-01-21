import { Link } from 'react-router-dom';

export default function DisplayData({ currentItems }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <div
        id="displayItems"
        className="p-4 pb-16 flex flex-wrap justify-center bg-gray-100"
      >
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="bg-white bg-opacity-50 border border-gray-300 rounded-lg p-4 mb-4 mx-2 w-full md:w-2/3 lg:w-1/2"
          >
            <ul>
              <div
                id="postHeader"
                className="flex items-center mb-2 bg-blue-300 p-2 rounded"
              >
                <img
                  alt="Author"
                  src={item.author.avatar}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div className="mb-2">
                  <li className="font-bold text-lg mb-1">{item.title}</li>
                  <li className="text-gray-700">
                    <span className="bg-gray-200 p-1 rounded-full text-sm">
                      {item.author.name}
                    </span>
                  </li>
                </div>
              </div>
              <li className="text-gray-600 mb-1">
                Publish Date: {item.publishDate}
              </li>
              <li className="text-gray-800 overflow-hidden text-ellipsis">
                Post Summary: {item.summary}
              </li>

              <Link to={`/posts/${item.id}`}>Details</Link>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
