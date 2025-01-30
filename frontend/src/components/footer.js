import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        {/* Left Side */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <img
            src="./images/footerlogo.png"
            alt="Medingen Logo"
            className="w-32 mb-4"
          />
          <h4 className="text-xl font-bold text-white mb-2">Mediangen</h4>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at
            urna et leo rhoncus mattis. Maecenas vel scelerisque nunc.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-wrap w-full lg:w-2/3 justify-between">
          {/* Website Column */}
          <div className="w-1/2 md:w-1/3 mb-4">
            <h5 className="text-lg font-bold text-white mb-4">Website</h5>
            <ul>
              <li className="mb-2">
                <a
                  href="/"
                  className="text-gray-400 hover:text-gray-300 transition"
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/features"
                  className="text-gray-400 hover:text-gray-300 transition"
                >
                  Features
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/how-it-works"
                  className="text-gray-400 hover:text-gray-300 transition"
                >
                  How it works
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/testimonials"
                  className="text-gray-400 hover:text-gray-300 transition"
                >
                  What's our customers say?
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div className="w-1/2 md:w-1/3 mb-4">
            <h5 className="text-lg font-bold text-white mb-4">Follow Us</h5>
            <ul>
              <li className="mb-2">
                <a
                  href="https://www.instagram.com/medingen"
                  className="text-gray-400 hover:text-gray-300 transition"
                >
                  Instagram
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.facebook.com/medingen"
                  className="text-gray-400 hover:text-gray-300 transition"
                >
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://twitter.com/medingen"
                  className="text-gray-400 hover:text-gray-300 transition"
                >
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.youtube.com/medingen"
                  className="text-gray-400 hover:text-gray-300 transition"
                >
                  Youtube
                </a>
              </li>
            </ul>
          </div>

          {/* More Column */}
          <div className="w-1/2 md:w-1/3 mb-4">
            <h5 className="text-lg font-bold text-white mb-4">More</h5>
            <ul>
              <li className="mb-2">
                <a
                  href="/help-center"
                  className="text-gray-400 hover:text-gray-300 transition"
                >
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/become-member"
                  className="text-gray-400 hover:text-gray-300 transition"
                >
                  Become a Member
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/events"
                  className="text-gray-400 hover:text-gray-300 transition"
                >
                  Events
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/terms-conditions"
                  className="text-gray-400 hover:text-gray-300 transition"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <p className="text-center text-gray-400 text-sm">
          &copy; 2024 Medingen. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
