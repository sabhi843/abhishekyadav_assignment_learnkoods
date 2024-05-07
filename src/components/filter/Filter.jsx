"use client";

import { addKeyword } from "@/reduxstore/store";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Filter = () => {
  const [value, setValue] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [keyword, setKeyword] = useState("");

  const [isOn, setIsOn] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleChangeOption = (e) => {
    setSelectedOption(e.target.value);
  };

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleAddKeyword = () => {
    if (keyword.trim() !== "") {
      dispatch(addKeyword(keyword)); // Dispatch the addKeyword action with the input value
      setKeyword(""); // Clear the input field after dispatching the action
    }
  };

  return (
    <div>
      <div className="flex flex-col px-8 pt-8  ">
        <span className="py-4 font-[18px] ">Search by Keywords</span>
        <div className="flex">
          <input
            placeholder="Job title,keywords or company"
            className="border rounded-lg p-4"
            value={keyword}
            onChange={handleInputChange}
          />
          <button
            onClick={handleAddKeyword}
            className="px-2 border rounded-lg ml-2"
          >
            Find
          </button>
        </div>
      </div>
      <div className="flex flex-col px-8 py-4 ">
        <span className="py-4 font-[18px] ">Location</span>
        <input
          placeholder="city or pincode"
          className="border rounded-lg p-4"
        />
        <div className="flex flex-col items-center justify-center mt-8 ">
          <span className="text-sm text-gray-500 pb-2">
            Radius around selected destination
          </span>
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={handleChange}
            className="w-64 h-2 appearance-none rounded-full bg-blue-200 outline-none focus:outline-none focus:bg-white-300"
          />
          <span className="ml-4 text-sm border rounded-lg p-2 my-4 px-4 text-blue-500 bg-blue-200">
            {value} km
          </span>
        </div>
      </div>
      <div className="flex flex-col px-8 pt-8  ">
        <span className="py-4  font-semibold ">Category</span>
        <select
          value={selectedOption}
          onChange={handleChangeOption}
          className="block w-full p-4 border border-gray-300 rounded-md  focus:outline-none text-sm"
        >
          <option value="">Choose a category</option>
          <option value="option1">Residential</option>
          <option value="option2">Commercial</option>
          <option value="option3">Industrial</option>
          <option value="option3">Apartments</option>
        </select>
      </div>
      <div className="flex flex-col px-8 pt-8  ">
        <span className="py-4  font-semibold ">Job type</span>

        <label className="inline-flex items-center mb-4 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-500 dark:text-gray-300">
            Freelancer
          </span>
        </label>
        <label className="inline-flex items-center mb-4 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-500 dark:text-gray-300">
            Full Time
          </span>
        </label>
        <label className="inline-flex items-center mb-4 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-500 dark:text-gray-300">
            Part Time
          </span>
        </label>
        <label className="inline-flex items-center mb-4 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-500 dark:text-gray-300">
            Temporary
          </span>
        </label>
      </div>
      <div className="flex flex-col px-8 pt-8  ">
        <span className="py-4  font-semibold ">Date Posted</span>

        <label className="inline-flex items-center mb-4 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-500 dark:text-gray-300">
            All
          </span>
        </label>
        <label className="inline-flex items-center mb-4 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-500 dark:text-gray-300">
            Last Hour
          </span>
        </label>
        <label className="inline-flex items-center mb-4 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-500 dark:text-gray-300">
            Last 24 Hour
          </span>
        </label>
        <label className="inline-flex items-center mb-4 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-500 dark:text-gray-300">
            Last 7 Days
          </span>
        </label>
        <label className="inline-flex items-center mb-4 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-500 dark:text-gray-300">
            Last 14 Days
          </span>
        </label>
        <label className="inline-flex items-center mb-4 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-500 dark:text-gray-300">
            Last 30 Days
          </span>
        </label>
      </div>
      <div className="flex flex-col px-8 pt-8  ">
        <span className="py-4  font-semibold ">Exprience Level</span>
        <label className="inline-flex items-center mb-4 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-500 dark:text-gray-300">
            Fresh
          </span>
        </label>
        <label className="inline-flex items-center mb-4 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-500 dark:text-gray-300">
            1 Year
          </span>
        </label>
        <label className="inline-flex items-center mb-4 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-500 dark:text-gray-300">
            2 Year
          </span>
        </label>
        <label className="inline-flex items-center mb-4 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-500 dark:text-gray-300">
            3 Year
          </span>
        </label>
        <label className="inline-flex items-center mb-4 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-500 dark:text-gray-300">
            4 Year
          </span>
        </label>
      </div>
      <div className="flex px-8 ">
        <button>
          <Image src="/add.png" width={24} height={24} className=" mx-2" />
        </button>
        <span className="text-blue-700">View More</span>
      </div>
      <div className="flex flex-col px-8  mt-8 ">
        <span className="text-sm text-black-500 pb-4 font-bold px-4">
          Salary
        </span>
        <input
          type="range"
          min="0"
          max="20000"
          value={value}
          onChange={handleChange}
          className="w-64 h-2 appearance-none rounded-full bg-blue-200 outline-none focus:outline-none focus:bg-white-300"
        />
        <span className="w-32 ml-16 text-sm border rounded-lg p-2 my-4 px-4 text-blue-700 bg-blue-200">
          $0 - {value}$
        </span>
      </div>
      <div className=" px-8 pt-8  ">
        <span className="py-4 font-bold ">Tags</span>
        <div className="flex flex-wrap">
          <button className="ml-4 text-sm border rounded-lg p-2 my-2 px-4 text-gray-700 ">
            App
          </button>
          <button className="ml-4 text-sm border rounded-lg p-2 my-2 px-4 text-gray-700 ">
            Administrative
          </button>
          <button className="ml-4 text-sm border rounded-lg p-2 my-2 px-4 text-gray-700 ">
            Android
          </button>
          <button className="ml-4 text-sm border rounded-lg p-2 my-2 px-4 text-gray-700 ">
            Wordpress
          </button>
          <button className="ml-4 text-sm border rounded-lg p-2 my-2 px-4 text-gray-700 ">
            Design
          </button>
          <button className="ml-4 text-sm border rounded-lg p-2 my-2 px-4 text-gray-700 ">
            React
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
