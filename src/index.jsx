import React from 'react';
import ReactDOM from 'react-dom';

/**
 * This file can be ignored, please work in ./components/App.jsx
 */

// Include mock API.
import './mock';

// Include styles.
import './styles/index.css';

// Include application component.
import App from './components/App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import DetailPage from './components/DetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/posts',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: 'posts/:postId',
    element: <DetailPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
