
"use client";
import React from "react";
import Link from "next/link"; // Use Next.js Link for navigation
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold mb-6 md:mb-0">
            Skill<span className="text-blue-400">Hives</span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <Link href="/" className="hover:text-blue-400 transition duration-300">
              Home
            </Link>
            <Link href="/v1/gallery" className="hover:text-blue-400 transition duration-300">
              Gallery
            </Link>
            <Link href="/v1/aboutus" className="hover:text-blue-400 transition duration-300">
              About
            </Link>
            <Link href="/v1/contactus" className="hover:text-blue-400 transition duration-300">
              Contact
            </Link>
            <Link href="/v1/store" className="hover:text-blue-400 transition duration-300">
              Store
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400 transition duration-300">
              <FiFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400 transition duration-300">
              <FiTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400 transition duration-300">
              <FiInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400 transition duration-300">
              <FiLinkedin />
            </a>
          </div>
        </div>

        <div className="text-center text-sm mt-10">
          &copy; {new Date().getFullYear()} SkillHives. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;


