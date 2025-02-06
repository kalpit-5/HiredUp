import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <h3 className="text-lg font-semibold text-[#6A38C2]">HiredUp</h3>
            <p className="mt-4 text-sm">
              India's #1 platform to search, apply, and get your dream job. We
              connect talents with top companies globally.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#6A38C2]">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/about" className="text-gray-600 hover:text-[#6A38C2]">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 hover:text-[#6A38C2]"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="/jobs" className="text-gray-600 hover:text-[#6A38C2]">
                  Browse Jobs
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-600 hover:text-[#6A38C2]">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-[#6A38C2]">Resources</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/blog" className="text-gray-600 hover:text-[#6A38C2]">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/career-tips"
                  className="text-gray-600 hover:text-[#6A38C2]"
                >
                  Career Tips
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-600 hover:text-[#6A38C2]">
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gray-600 hover:text-[#6A38C2]"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div>
            <h4 className="text-lg font-semibold text-[#6A38C2]">Follow Us</h4>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.linkedin.com/in/kalpitparmar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#6A38C2]"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://x.com/Kalpit_05"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#6A38C2]"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://wa.me/919664815923"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#6A38C2]"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
            <p className="mt-6 text-sm">
              Need help? Mail us on...{" "}
              <a
                href="mailto:support@hiredup.com"
                className="text-[#6A38C2] hover:underline"
              >
                kalpitparmar55@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-300 pt-6 text-center">
          <p className="text-sm text-gray-600">
            &copy; 2025 HiredUp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
