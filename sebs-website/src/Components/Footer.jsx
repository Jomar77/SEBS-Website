import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#8fc2c3] text-[#17414d] w-full pt-12 pb-4">
      <div className="max-w-3xl px-8">
        <div className="flex flex-col md:flex-row md:items-start md:gap-2 gap-4">
          {/* Quick Links */}
          <nav className="flex-1" aria-label="Footer Navigation">
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
          <div className="flex-1 text-white md:text-[#17414d]">
            <h3 className="font-serif text-2xl font-bold mb-4">Contact Us</h3>
            <div className="text-lg mb-2">Phone: +1 234 567 890</div>
            <div className="text-lg">
              Email:{" "}
              <a href="mailto:info@colorfulevents.com" className="underline">
                info@colorfulevents.com
              </a>
            </div>
          </div>
          {/* Follow Us */}
          <div className="flex-1">
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
      </div>
      <div className="border-t border-[#17414d] my-8 w-full" />
        <div className="text-center text-lg font-serif text-[#17414d]">
          &copy; {new Date().getFullYear()} Lorem Ipsum. All rights reserved.
        </div>
    </footer>
  );
}
