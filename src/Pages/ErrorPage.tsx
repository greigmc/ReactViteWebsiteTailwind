import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div
      id="error-page"
      className="flex flex-col justify-center items-center min-h-screen text-center bg-gray-50 text-gray-800 px-4"
    >
      <h1 className="text-4xl font-bold mb-2">Oops!</h1>
      <p className="mb-4 text-lg">Sorry, an unexpected error has occurred.</p>

      <Link
        to="/"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Home
      </Link>
    </div>
  );
}
