"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { Bounce, toast } from "react-toastify";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const sortBy = useSelector((state) => state.filters.sortBy);
  const keywords = useSelector((state) => state.keyword);

  const url = "https://learnkoods-task.onrender.com/job_api/";

  const fetchData = async (url) => {
    const response = await axios.get(url);
    return response.data;
  };
  const { isLoading, isError, data, error } = useQuery(
    ["data"],
    () => fetchData(url),
    {
      onSuccess: (res) => {
        console.log("Request successful:", res);
        setJobs(res?.results);
        setNextPageUrl(res?.next); // Update next page URL
        setPrevPageUrl(res?.previous);
      },
      onError: (error) => console.error("Error fetching data:", error),
      refetchOnWindowFocus: false,
    }
  );

  const fetchNextPage = () => {
    fetchData(nextPageUrl)
      .then((res) => {
        console.log("Next page fetched:", res);
        toast.success("next page fetched", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          transition: Bounce,
        });
        setJobs(res?.results);
        setNextPageUrl(res?.next); // Update next page URL
        setPrevPageUrl(res?.previous);
      })
      .catch((error) => {
        console.error("Error fetching next page:", error);
      });
  };
  const fetchPrevPage = () => {
    fetchData(prevPageUrl)
      .then((res) => {
        console.log("Prev page fetched:", res);
        toast.success("Prev page fetched", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          transition: Bounce,
        });
        setJobs(res?.results);
        setNextPageUrl(res?.next);
        setPrevPageUrl(res?.previous); // Update next page URL
      })
      .catch((error) => {
        console.error("Error fetching next page:", error);
      });
  };

  const sortJobs = () => {
    let sortedJobs = [...jobs]; // Create a copy of the jobs array

    // Apply sorting based on the selected sorting option
    if (sortBy === "newest") {
      sortedJobs.sort((a, b) => new Date(b.created) - new Date(a.created));
    } else if (sortBy === "oldest") {
      sortedJobs.sort((a, b) => new Date(a.created) - new Date(b.created));
    }

    // Apply filtering based on keywords
    if (typeof keywords === "string" && keywords.length > 0) {
      // Split keywords string by comma and trim whitespace
      const keywordArray = keywords.split(",").map((keyword) => keyword.trim());

      sortedJobs = sortedJobs.filter((job) => {
        // Check if any value in the job object contains any of the keywords
        return Object.values(job).some((value) => {
          if (typeof value === "string") {
            return keywordArray.some((keyword) =>
              value.toLowerCase().includes(keyword.toLowerCase())
            );
          }
          return false; // If value is not a string, skip it
        });
      });
    }

    return sortedJobs;
  };

  const sortedJobs = sortJobs();
  console.log("keywords type of", keywords);
  console.log("sorted final", sortedJobs);

  return (
    <div>
      {sortedJobs.map((job, index) => (
        <div key={index} className="flex p-12 border rounded-lg mb-12">
          <div className="p-4">
            <Image
              src={job.image}
              width={48}
              height={48}
              className="border-2 rounded-lg border-gray-300"
            />
          </div>
          <div className="p-2">
            <span className="font-semibold">{job.title}</span>
            <div className="flex space-x-5 pt-4">
              <span className="text-gray-500 text-sm">{job.company}</span>
              <span className="text-gray-500 text-sm">{job.location}</span>
              <span className="text-gray-500 text-sm">{job.timeline}</span>
              <span className="text-gray-500 text-sm">
                {job["min salary"]} $-{job["max salary"]} $
              </span>
              <span className="text-gray-500 text-sm">{job?.created} </span>
            </div>
            <div className="flex pt-4 text-xs space-x-5">
              <button
                key={index}
                className={`border rounded-3xl p-1 px-4 ${job.color}`}
              >
                {job.type}
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* <div className="flex p-12 border rounded-lg">
        <div className="p-4  ">
          <Image
            src="/figma.jpg"
            width={48}
            height={48}
            className="border-2 rounded-lg border-gray-300"
          />
        </div>
        <div className="p-2">
          <span className="font-semibold">
            Software Engineer(Android), Libraries
          </span>
          <div className="flex space-x-5 pt-4">
            <span className="text-gray-500 text-sm">Figma</span>
            <span className="text-gray-500 text-sm">London</span>
            <span className="text-gray-500 text-sm">11 hours ago</span>
            <span className="text-gray-500 text-sm">$35k-$45k</span>
          </div>
          <div className="flex pt-4 text-xs space-x-5">
            <button className="border rounded-3xl p-1 px-4 bg-blue-200 text-blue-500">
              Freelancer
            </button>
            <button className="border rounded-3xl p-1 px-4 bg-green-200 text-green-500">
              Private
            </button>
            <button className="border rounded-3xl p-1 px-4 bg-orange-100 text-orange-400">
              Urgent
            </button>
          </div>
        </div>
      </div> */}
      <div className=" flex justify-between">
        <button
          className="border rounded-lg p-2 px-4 text-red-500 bg-red-100 border-red-500"
          onClick={fetchPrevPage}
        >
          Previous
        </button>
        <button
          className="border rounded-lg p-2 px-4 text-green-500 bg-green-100 border-green-500"
          onClick={fetchNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Jobs;
