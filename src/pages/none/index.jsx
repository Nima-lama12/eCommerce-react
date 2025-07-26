import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="text-center">
        <h1 className="text-[8rem] font-extrabold text-gray-800 tracking-wider">404</h1>
        <p className="text-2xl md:text-3xl font-semibold text-gray-700 mt-2">Page Not Found</p>
        <p className="text-gray-600 mt-4">Sorry, the page you are looking for doesn't exist or has been moved.</p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
        >
          Go back Products 
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
