// components/Navbar.js (enhanced)
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  const isActive = (pathname) => {
    return router.pathname === pathname;
  };

  return (
    <nav className="bg-white shadow-sm py-4 navbar">
      <div className="container mx-auto px-4 flex space-x-6">
        <Link
          href="/"
          className={`font-semibold ${
            isActive('/') ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'
          } transition-colors`}
        >
          Home
        </Link>
        <Link
          href="/about-us"
          className={`font-semibold ${
            isActive('/about-us') ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'
          } transition-colors`}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`font-semibold ${
            isActive('/contact') ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'
          } transition-colors`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}