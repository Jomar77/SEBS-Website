import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#8fc2c3] text-[#17414d] w-full pt-12 pb-4">
      <div className="max-w-4xl ml-14 mr-4 px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-8 md:justify-start">
          {/* Quick Links */}
          <nav aria-label="Footer Navigation" className="md:justify-self-start">
            <h3 className="font-corben-reg text-xl mb-4 text-[#17414d]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-[#ffffff]">
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
          <div className="md:justify-self-start md:mr-8">
            <h3 className="font-corben-reg text-xl mb-4 text-[#17414d]">
              Contact Us
            </h3>
            <div className="space-y-2 text-[#ffffff]">
              <div>Phone: +1 234 567 890</div>
              <div>
                Email:{" "}
                <a
                  href="mailto:psalmandplatter@gmail.com"
                  className="underline"
                >
                  faith@psalmandplatter.com
                </a>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div className="md:justify-self-start">
            <h3 className="font-corben-reg text-xl mb-4 text-[#17414d]">
              Follow Us
            </h3>
            <div className="flex space-x-4 text-2xl text-[#17414d]">
              <a
                href="https://www.facebook.com/psalmandplatternz"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-22">
        <div className="border-t border-[#17414d] w-full" />
      </div>

      <div className="font-regular text-center py-4 text-[#17414d]">
        © 2025 Psalm & Platter. All rights reserved.
      </div>
    </footer>
  );
}
