import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#4A3A32] to-[#2B221D] text-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.4fr] gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Blue Whale Resort</h2>

            <div className="w-16 h-1 bg-[#C89A53] mb-5 rounded-full"></div>

            <p className="text-[#D9CFC3] leading-7">
              Experience luxury, comfort, and unforgettable moments in the heart
              of Kalpitiya. Discover elegant accommodations, fine dining, and
              exciting lagoon adventures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-[#D9CFC3] hover:text-[#C89A53] transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/rooms"
                  className="text-[#D9CFC3] hover:text-[#C89A53] transition"
                >
                  Rooms
                </Link>
              </li>

              <li>
                <Link
                  to="/packages"
                  className="text-[#D9CFC3] hover:text-[#C89A53] transition"
                >
                  Packages
                </Link>
              </li>

              <li>
                <Link
                  to="/gallery"
                  className="text-[#D9CFC3] hover:text-[#C89A53] transition"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-[#D9CFC3] hover:text-[#C89A53] transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-[#D9CFC3] hover:text-[#C89A53] transition"
                >
                  Contact
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-white">
              Our Services
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/kitesurfing"
                  className="text-[#D9CFC3] hover:text-[#C89A53] transition"
                >
                  Kitesurfing
                </Link>
              </li>

              <li>
                <Link
                  to="/dining"
                  className="text-[#D9CFC3] hover:text-[#C89A53] transition"
                >
                  Dining
                </Link>
              </li>

              <li>
                <Link
                  to="/packages"
                  className="text-[#D9CFC3] hover:text-[#C89A53] transition"
                >
                  Holiday Packages
                </Link>
              </li>

              <li>
                <Link
                  to="/rooms"
                  className="text-[#D9CFC3] hover:text-[#C89A53] transition"
                >
                  Luxury Rooms
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-white">
              Contact Us
            </h3>

            <div className="space-y-4 text-[#D9CFC3]">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#C89A53]" />
                <span>Kalpitiya, Sri Lanka</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#C89A53]" />
                <span>+94 77 123 4567</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#C89A53]" />
                <span>info@bluewhaleresort.com</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-11 h-11 rounded-full border border-[#8D7668] flex items-center justify-center hover:border-[#C89A53] hover:text-[#C89A53] transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-[#8D7668] flex items-center justify-center hover:border-[#C89A53] hover:text-[#C89A53] transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-[#8D7668] flex items-center justify-center hover:border-[#C89A53] hover:text-[#C89A53] transition-all duration-300"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
          {/* Map (right side) */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-white">Find Us</h3>

            <div className="overflow-hidden rounded-2xl border border-[#5C4A42] shadow-lg">
              <iframe
                title="Blue Whale Resort Location"
                src="https://maps.google.com/maps?q=Blue%20Whale%20Resort%20Kalpitiya&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#5C4A42] mt-14 pt-6 flex flex-col md:flex-row justify-between items-center text-[#C8BDB0] text-sm">
          <p>© 2026 Blue Whale Resort. All Rights Reserved.</p>

          <p className="mt-3 md:mt-0">
            Designed for Luxury Coastal Experiences
          </p>
        </div>
      </div>
    </footer>
  );
}
