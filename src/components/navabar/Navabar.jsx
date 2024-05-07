"use client";
import React, { Fragment, useState } from "react";
import HamburgerMenu from "../hamburger/HamburgerMenu";
import Modal from "../modal/Modal";
import SigninModal from "../signinmodal/SigninModal";
import { Bounce, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../reduxstore/store";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [modal, setModal] = useState(false);
  const [signinmodal, setSigninModal] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
    // Clear cookies
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
    });
    toast.success("User logged out successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    // Additional logout logic here
  };
  return (
    <Fragment>
      <nav>
        <div className="p-4 m-auto flex items-center justify-between mx-8">
          {/* Left side: Website name */}
          <div className="text-3xl font-bold text-blue-700">Learnkoods</div>

          {/* Hamburger menu for small screens */}
          <HamburgerMenu
            isModal={() => setModal(true)}
            onClose={() => setModal(false)}
          />

          {/* Middle: List of links (hidden on small screens) */}
          <ul className="hidden xl:flex mx-auto justify-between ">
            <li>
              <a href="#" className="text-sm p-2">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-sm p-2">
                Find Jobs
              </a>
            </li>
            <li>
              <a href="#" className="text-sm p-2">
                Employers
              </a>
            </li>
            <li>
              <a href="#" className="text-sm p-2">
                Candidates
              </a>
            </li>
            <li>
              <a href="#" className="text-sm p-2">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-sm p-2">
                About Us
              </a>
            </li>
          </ul>

          {/* Right side: Login/Register button (hidden on small screens) */}
          <div className="hidden xl:flex justify-between">
            <button className="bg-white text-base text-blue-600 py-2 rounded-md font-normal p-4">
              Upload your CV
            </button>

            {user ? (
              <button
                className="bg-white text-base text-blue-600 px-4 py-2 font-light border rounded-lg hover:bg-blue-500 hover:text-white"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <button
                className="bg-white text-base text-blue-600 px-4 py-2 font-light border rounded-lg hover:bg-blue-500 hover:text-white"
                onClick={() => setModal(true)}
              >
                Login / Register
              </button>
            )}

            <button className="bg-blue-600 text-base text-white px-4 py-2 rounded-lg font-medium border hover:bg-blue-800 mx-4">
              Job Post
            </button>
          </div>
        </div>
      </nav>
      <Modal
        isVisible={modal}
        onClose={() => setModal(false)}
        openSignIn={() => setSigninModal(true)}
      />
      <SigninModal
        isSigninVisible={signinmodal}
        onSigninClose={() => setSigninModal(false)}
        openLogin={() => setModal(true)}
      />
    </Fragment>
  );
};

export default Navbar;
