import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import NavMenu from "./NavMenu";

export default function Header() {
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[#8fc2c3] h-5 w-full" />

      {/* Main header */}
      <div className="flex items-center justify-between px-9 py-6 bg-[#fff]">
        {/* Search icon */}
        <div className="flex-1 flex items-center">
          <FaMagnifyingGlass className="text-xl text-teal-900" />
        </div>
        {/* Logo */}
        <div className="flex-1 flex justify-center">
          <span className="text-4xl font-yeseva text-primary-content">
            Psalm & Platter
          </span>
        </div>
        {/* Social icons */}
        <div className="flex-1 flex justify-end space-x-2">
          <a href="#" aria-label="Facebook">
            <FaFacebookSquare className="text-2xl text-[#ffba51]" />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram className="text-2xl text-[#ffba51]" />
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#f8d1d6]">
        <NavMenu />
      </nav>
    </header>
  );
}
