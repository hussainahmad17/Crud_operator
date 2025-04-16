// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container p-5 flex items-center justify-between">
        {/* Brand Name */}
        <div className="text-xl font-bold">
          <Link href="/">
          CRUD OPERATION
          </Link>
        </div>
        {/* Add Topics Button */}
        <Link href="/addTopics">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Topics
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
