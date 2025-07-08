import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#8cc0c3] text-[#17414d] w-full pt-12 pb-4 px-2">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:justify-start gap-8 md:gap-12 px-4">
        {/* Quick Links */}
        <nav className="mb-8 md:mb-0 min-w-[180px]" aria-label="Footer Navigation">
          <h3 className="font-serif text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-lg text-white">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:underline">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/booking" className="hover:underline">
                Booking
              </Link>
            </li>
          </ul>
        </nav>
        {/* Contact Us */}
        <div className="mb-8 md:mb-0 min-w-[220px] text-white">
          <h3 className="font-serif text-2xl font-bold mb-4 text-[#17414d]">Contact Us</h3>
          <div className="text-lg mb-2">Phone: +1 234 567 890</div>
          <div className="text-lg">
            Email:{" "}
            <a
              href="mailto:info@colorfulevents.com"
              className="underline"
            >
              info@colorfulevents.com
            </a>
          </div>
        </div>
        {/* Follow Us */}
        <div className="min-w-[160px]">
          <h3 className="font-serif text-2xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-3xl">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#17414d] my-8 w-full" />
      <div className="text-center text-lg font-serif text-[#17414d]">
        &copy; {new Date().getFullYear()} Lorem Ipsum. All rights reserved.
      </div>
    </footer>
  );
}
