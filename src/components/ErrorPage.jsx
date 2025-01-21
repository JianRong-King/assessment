import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Go to home</Link>
    </>
  );
}
