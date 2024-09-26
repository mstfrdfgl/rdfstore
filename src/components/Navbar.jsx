import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faSearch,
  faShoppingCart,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faYoutube,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className="w-full">
      {/* Top bar */}
      <div className="hidden md:flex bg-[#252B42] text-white w-full py-2">
        <div className="px-8 py-2 flex flex-wrap justify-between items-center text-sm w-full">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <span>(225) 555-0118</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <span>michelle.rivera@example.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <span>Follow Us and get a chance to win 80% off</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden md:inline">Follow Us :</span>
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-white text-[#252B42] w-full">
        <div className="flex justify-between items-center px-8 py-4 md:hidden">
          {/* Mobil görünüm için başlık */}
          <div className="text-2xl font-bold text-center w-full">Bandage</div>
        </div>
        <div className="hidden md:flex justify-between items-center px-8 py-4">
          {/* Masaüstü görünüm için başlık */}
          <div className="text-2xl font-bold">Bandage</div>
          <div className="md:flex md:flex-row items-center space-x-6">
            {/* Masaüstü menü */}
            <a href="#" className="hover:text-[#23A6F0]">
              Home
            </a>
            <a href="#" className="hover:text-[#23A6F0]">
              Shop
            </a>
            <a href="#" className="hover:text-[#23A6F0]">
              About
            </a>
            <a href="#" className="hover:text-[#23A6F0]">
              Blog
            </a>
            <a href="#" className="hover:text-[#23A6F0]">
              Contact
            </a>
            <a href="#" className="hover:text-[#23A6F0]">
              Pages
            </a>
          </div>
          <div className="md:flex items-center space-x-6 text-[#23A6F0]">
            <div className="flex items-center">
              <span className="mr-2">Login</span>
              <span>/</span>
              <span className="ml-2">Register</span>
            </div>
            <FontAwesomeIcon icon={faSearch} />
            <FontAwesomeIcon icon={faShoppingCart} />
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
      </div>

      {/* Mobil Menü */}
      <div className="md:hidden bg-white text-[#252B42] flex flex-col items-center">
        <div className="px-8 py-4 flex flex-col items-center">
          <a href="#" className="py-2 hover:text-[#23A6F0]">
            Home
          </a>
          <a href="#" className="py-2 hover:text-[#23A6F0]">
            Shop
          </a>
          <a href="#" className="py-2 hover:text-[#23A6F0]">
            About
          </a>
          <a href="#" className="py-2 hover:text-[#23A6F0]">
            Blog
          </a>
          <a href="#" className="py-2 hover:text-[#23A6F0]">
            Contact
          </a>
          <a href="#" className="py-2 hover:text-[#23A6F0]">
            Pages
          </a>
        </div>
        <div className="flex flex-col items-center py-4">
          <div className="flex items-center space-x-1">
            <span className="mr-2">Login</span>
            <span>/</span>
            <span className="ml-2">Register</span>
          </div>
          <div className="flex space-x-4 mt-2">
            <FontAwesomeIcon icon={faSearch} />
            <FontAwesomeIcon icon={faShoppingCart} />
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
