import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

export default function Header() {
    return (
        <header className="w-full">
            {/* Top bar */}
            <div className="bg-teal-700 h-2 w-full" />

            {/* Main header */}
            <div className="flex items-center justify-between px-8 py-6 bg-gradient-to-b from-gray-100 to-gray-300">
                {/* Search icon */}
                <div className="flex-1 flex items-center">
                    <FiSearch className="text-3xl text-teal-900" />
                </div>
                {/* Logo */}
                <div className="flex-1 flex justify-center">
                    <span className="text-5xl font-bold text-blue-700">logo</span>
                </div>
                {/* Social icons */}
                <div className="flex-1 flex justify-end space-x-4">
                    <a href="#" aria-label="Facebook">
                        <FaFacebookF className="text-2xl text-yellow-600" />
                    </a>
                    <a href="#" aria-label="Instagram">
                        <FaInstagram className="text-2xl text-yellow-600" />
                    </a>
                </div>
            </div>

            {/* Navigation */}
            <nav className="bg-pink-200">
                <ul className="flex justify-center space-x-8 py-2">
                    <li>
                        <a href="/" className="uppercase font-bold text-pink-700 hover:underline tracking-wide">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="uppercase font-bold text-pink-700 hover:underline tracking-wide">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="/gallery" className="uppercase font-bold text-pink-700 hover:underline tracking-wide">
                            Gallery
                        </a>
                    </li>
                    <li>
                        <a href="/booking" className="uppercase font-bold text-pink-700 hover:underline tracking-wide">
                            Book
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}