import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import NavMenu from "./NavMenu";

export default function Header() {
    return (
        <header className="w-full">
            {/* Top bar */}
            <div className="bg-accent-content h-5 w-full" />

            {/* Main header */}
            <div className="flex items-center justify-between px-8 py-6 bg-white">
                {/* Search icon */}
                <div className="flex-1 flex items-center">
                    <FiSearch className="text-3xl text-teal-900" />
                </div>
                {/* Logo */}
                <div className="flex-1 flex justify-center">
                    <span className="text-5xl font-bold text-primary-content">logo</span>
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
            <nav className="bg-base-200">
                <NavMenu />
            </nav>
        </header>
    );
}