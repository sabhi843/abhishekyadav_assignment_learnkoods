"use client";

import Filter from "@/components/filter/Filter";
import Jobs from "@/components/jobs/Jobs";
import { resetFilters, setFilter } from "@/reduxstore/store";
import Image from "next/image";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const sortBy = useSelector((state) => state.filters.sortBy);
  const keywords = useSelector((state) => state.keyword); // Access sortBy from Redux store
  const dispatch = useDispatch();

  const handleSort = (e) => {
    const selectedSortBy = e.target.value;
    dispatch(setFilter({ key: "sortBy", value: selectedSortBy }));
  };
  const handleClearAll = () => {
    dispatch(resetFilters());
  };
  return (
    <Fragment>
      <div className="w-full flex flex-col justify-between">
        <div className="flex flex-col items-center justify-center p-8 bg-blue-50 ">
          <span className="font-semibold text-3xl ">Find Jobs</span>
          <span className="text-light p-4">Home/Jobs</span>
        </div>
        <div className="flex  justify-between lg:justify-end  mx-28 mt-8">
          {}
          {sortBy !== "default" || keywords.trim() !== "" ? (
            <button
              className="mr-4 p-2 border rounded-lg bg-red-200 text-red-500 border-red-300"
              onClick={handleClearAll}
            >
              Clear All
            </button>
          ) : null}
          <div className="lg:hidden  p-3 border rounded-lg mx-16 px-12 flex justify-center text-sm  bg-blue-100 text-blue-500">
            Filter
          </div>
          <div className="flex space-x-4">
            <select
              onChange={handleSort}
              value={sortBy}
              className="block w-full p-2 border border-gray-300 rounded-md  focus:outline-none text-sm px-6"
            >
              <option value="default">Sort by (default)</option>
              <option value="newest">Newest</option>
              <option value="oldest">oldest</option>
            </select>

            <select
              value=""
              className="block w-full p-2 border border-gray-300 rounded-md  focus:outline-none text-sm"
            >
              <option value="">All</option>
              <option value="option1">10 per page</option>
              <option value="option2">20 per page</option>
            </select>
          </div>
        </div>
        <div className="w-full border flex mt-12  space-x-8 ">
          <div className="lg:w-2/6 flex justify-start   ">
            <div className="hidden lg:flex border w-full  rounded-lg">
              <Filter />
            </div>
          </div>
          <div className=" w-full lg:w-4/6">
            <Jobs />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
