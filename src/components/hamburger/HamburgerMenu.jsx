// HamburgerMenu.js
import React from "react";

const HamburgerMenu = ({ isModal }) => {
  return (
    <div className="flex  xl:hidden items-center text-black space-x-2">
      {/* Hamburger icon */}
      <svg
        className="inline-block hover:cursor-pointer"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 256 256"
        enableBackground="new 0 0 256 256"
        xmlSpace="preserve"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        onClick={() => isModal()}
      >
        <g>
          <g>
            <path className="svg-fill" d="M127.4,177.1" />
            <path
              className="svg-fill"
              d="M56.2,121.8c-0.6,0-1.2,0.1-1.5,0.3c0.5-0.2,1.1-0.3,1.7-0.3H56.2L56.2,121.8z M234.1,192.7c0-0.3,0-0.7,0.1-1C234.2,191.9,234.2,192.1,234.1,192.7L234.1,192.7z M246,61.7C246,61.7,246,61.7,246,61.7v-0.2C246,61.6,246,61.7,246,61.7L246,61.7z M234.1,61.7C234.1,61.7,234.1,61.7,234.1,61.7c0,0,0-0.1,0-0.2V61.7L234.1,61.7z"
            />
            <path
              className="svg-fill"
              d="M241.3,239.8c-1.7-12.4-5.3-24.4-10.9-35.7c-1.1-2.2-2.2-4.4-3.4-6.5c0,0,0,0,0,0c-5.3-8.9-11.7-17.2-19.3-24.6l0,0c-1.6-1.6-3.3-3.2-5.1-4.7c-12.4-10.9-26.7-18.9-41.9-23.8c2.8-1.5,5.4-3.3,8-5.1c2.9-2.1,5.7-4.5,8.3-7.2c13.7-13.7,21.3-32,21.3-51.5S190.7,43,177,29.3c-13.5-13.5-31.3-21-50.4-21.3c-0.3,0-0.6,0-0.9,0s-0.6,0-0.9,0c-19,0.3-36.9,7.8-50.4,21.3C60.6,43,53,61.3,53,80.7s7.6,37.7,21.3,51.5c2.6,2.6,5.4,5,8.3,7.2c2.6,1.9,5.2,3.6,8,5.1c-15.2,4.9-29.5,13-41.9,23.8c-1.7,1.5-3.4,3.1-5.1,4.7c-7.5,7.4-14,15.7-19.3,24.6c-1.2,2.1-2.4,4.3-3.4,6.5c-5.5,11.2-9.2,23.3-10.9,35.7c-0.5,4,2.3,7.7,6.2,8.2c0.3,0,0.7,0.1,1,0.1c0.3,0,0.6,0,0.9,0c2.9-0.6,5.2-3,5.7-6.1c3.3-23,14.3-43.9,30.1-59.9c18.8-18.9,44.3-30.8,71.8-30.8h0.1c27.5,0.1,52.9,12,71.6,30.8c15.8,15.9,26.7,36.9,30.1,59.9c0.5,3.1,2.8,5.4,5.6,6.1c0,0,0,0,0,0c0.3,0,0.6,0,0.9,0c0.3,0,0.7,0,1-0.1C239,247.4,241.8,243.8,241.3,239.8L241.3,239.8z M125.5,139c-0.1,0-0.3,0-0.4,0c-27.2-0.2-51.4-19.1-58-44.4C67,94.3,67,94,66.9,93.7c-1-4.2-1.6-8.5-1.6-13s0.6-8.9,1.6-13.1c0.1-0.3,0.1-0.6,0.2-0.8c6.6-26,31.1-46.6,58.4-46.6h0.3c27.4,0,51.8,20.6,58.5,46.6c0.1,0.3,0.1,0.6,0.2,0.8c1,4.3,1.6,8.7,1.6,13.1c0,4.5-0.6,8.8-1.6,13c-0.1,0.3-0.1,0.6-0.2,0.8c-6.6,25.3-30.8,44.2-58,44.4C126,139,125.8,139,125.5,139L125.5,139z"
            />
          </g>
        </g>
      </svg>
      <div>
        <ion-icon name="menu"></ion-icon>
        <div className="w-6 h-0.5 bg-black m-0.5"></div>
        <div className="w-6 h-0.5 bg-black m-0.5"></div>
        <div className="w-3 h-0.5 bg-black ml-3.5"></div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
