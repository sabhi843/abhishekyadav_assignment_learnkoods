import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" w-full border pt-12  ">
      <div className="flex flex-wrap mx-auto px-4 md:px-16 w-full">
        {/* First div */}
        <div className="w-full md:w-full lg:w-1/3 mb-8 md:mb-0 md:pr-4">
          <h2 className="text-3xl text-blue-700 font-bold mb-4">Learnkoods</h2>
          <ul>
            <li className="py-2 font-bold">Call us</li>
            <li className="text-blue-500 font-semibold">123 456 7890</li>
            <li className="py-2 text-gray-500 text-sm font-normal pt-6">
              329 Queensberry Street, North Melbourne VIC
            </li>
            <li className=" text-gray-500 text-sm font-normal">
              3051, Australia.
            </li>
          </ul>
        </div>

        {/* Second div */}
        <div className="w-full md:w-1/2 lg:w-1/6 mb-8 md:mb-0 md:pr-4">
          <h3 className="text-lg font-semibold mb-4">For Candidates</h3>
          <ul>
            <li className="text-gray-500 text-sm font-normal py-2 relative hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Browse Jobs
            </li>
            <li className=" text-gray-500 text-sm font-normal py-2 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Browse Categories
            </li>
            <li className=" text-gray-500 text-sm font-normal py-2 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Candidate Dashboard
            </li>
            <li className=" text-gray-500 text-sm font-normal py-2 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Job Alerts
            </li>
            <li className=" text-gray-500 text-sm font-normal py-2 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              My Bookmarks
            </li>
          </ul>
        </div>

        {/* Third div */}
        <div className="w-full md:w-1/2 lg:w-1/6 mb-8 md:mb-0 md:pr-4">
          <h3 className="text-lg font-semibold mb-4">For Employers</h3>
          <ul>
            <li className=" text-gray-500 text-sm font-normal py-2 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Browse Candidates
            </li>
            <li className=" text-gray-500 text-sm font-normal py-2 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Employer Dashboard
            </li>
            <li className=" text-gray-500 text-sm font-normal py-2 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Add Job
            </li>
            <li className=" text-gray-500 text-sm font-normal py-2 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Job Packages
            </li>
          </ul>
        </div>

        {/* Fourth div */}
        <div className="w-full md:w-1/2 lg:w-1/6 mb-8 md:mb-0 md:pr-4">
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul>
            <li className=" text-gray-500 text-sm font-normal py-2 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              About Us
            </li>
            <li className=" text-gray-500 text-sm font-normal py-2 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Job Page Invoice
            </li>
            <li className=" text-gray-500 text-sm font-normal py-2 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Terms Page
            </li>
            <li className=" text-gray-500 text-sm font-normal py-2 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Blog
            </li>
            <li className=" text-gray-500 text-sm font-normal py-2 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Fifth div */}
        <div className="w-full md:w-1/2 lg:w-1/6 mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Helpful Resources</h3>
          <ul>
            <li className=" text-gray-500 text-sm font-normal py-2 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Site Map
            </li>
            <li className=" text-gray-500 text-sm font-normal py-2 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Terms of Use
            </li>
            <li className=" text-gray-500 text-sm font-normal py-2 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Privacy Center
            </li>
            <li className=" text-gray-500 text-sm font-normal py-2 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Security Center
            </li>
            <li className=" text-gray-500 text-sm font-normal py-2 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Accessibility Center
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center border p-6 px-24 w-full  md:flex-row md:justify-between">
        {/* Text Div */}
        <div className="font-normal text-sm text-gray-500 md:text-left">
          © 2024 Learnkoods by Epic. All Right Reserved.
        </div>
        {/* Icons Div */}
        <div className="flex justify-center items-center mb-4 space-x-4  text-sm font-normal">
          {/* Facebook Icon */}
          <a
            href="#"
            className="text-gray-500 hover:text-violet-500 transition-colors duration-300"
          >
            <FaFacebook />
          </a>

          {/* Twitter Icon */}
          <a
            href="#"
            className="text-gray-500 hover:text-violet-500 transition-colors duration-300"
          >
            <FaTwitter />
          </a>

          {/* Instagram Icon */}
          <a
            href="#"
            className="text-gray-500 hover:text-violet-500 transition-colors duration-300"
          >
            <FaInstagram />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="#"
            className="text-gray-500 hover:text-violet-500 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
