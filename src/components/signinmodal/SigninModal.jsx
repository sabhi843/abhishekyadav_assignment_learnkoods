"use client";
import axios from "axios";
import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { loginUser } from "../../reduxstore/store";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SigninModal = ({ isSigninVisible, onSigninClose, openLogin }) => {
  if (!isSigninVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onSigninClose();
  };

  const transition = () => {
    onSigninClose();
    openLogin();
  };

  const { register, handleSubmit } = useForm();

  const mutation = useMutation(
    (data) =>
      axios.post("https://learnkoods-task.onrender.com/user_api/", data),
    {
      onSuccess: (res) => {
        console.log("SignUp succesful", res);
        onSigninClose();
        dispatch(loginUser(res?.data));
        toast.success("Signup Successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          transition: Bounce,
        });
      },
      onError: (error) => {
        console.error("Signup failed:", error);
      },
    }
  );

  const onSubmit = (formData) => {
    console.log("Signup Clicked");
    mutation.mutate(formData);
  };
  return (
    <Fragment>
      <div
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
        id="wrapper"
        onClick={handleClose}
      >
        <div className="w-[600px] flex flex-col h-full">
          <button
            className="text-white text-xl place-self-end"
            onClick={() => onSigninClose()}
          >
            X
          </button>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col bg-white p-2 rounded-lg px-12">
              <h3 className="p-2 font-semibold text-2xl mb-4">
                Create a Free Superio Account
              </h3>
              <div className="flex flex-col mb-4">
                <span className="pb-2 font-semibold text-sm ">Email</span>
                <input
                  {...register("email")}
                  placeholder="Email"
                  className="border rounded-lg p-4 bg-blue-50"
                />
              </div>
              <div className="flex flex-col mb-4">
                <span className="pb-2 font-semibold text-sm ">Username</span>
                <input
                  {...register("username")}
                  placeholder="Username"
                  className="border rounded-lg p-4 bg-blue-50"
                />
              </div>
              <div className="flex flex-col mb-4">
                <span className="pb-2 font-semibold text-sm ">First Name</span>
                <input
                  {...register("first_name")}
                  placeholder="First Name"
                  className="border rounded-lg p-4 bg-blue-50"
                />
              </div>
              <div className="flex flex-col mb-4">
                <span className="pb-2 font-semibold text-sm ">Last Name</span>
                <input
                  {...register("last_name")}
                  placeholder="Last Name"
                  className="border rounded-lg p-4 bg-blue-50"
                />
              </div>
              <div className="flex flex-col mb-4">
                <span className="pb-2 font-semibold text-sm ">Password</span>
                <input
                  {...register("password")}
                  placeholder="Password"
                  className="border rounded-lg p-4 bg-blue-50"
                />
              </div>
              <div className="flex justify-between mt-4">
                <div className="flex items-center ">
                  <input type="checkbox" className="mr-4" />
                  <span className="text-sm text-gray-500">Remember me</span>
                </div>
                <span className="text-sm text-gray-500">Forgot password ?</span>
              </div>
              <button
                type="submit"
                className="border py-3 my-4 rounded-xl bg-blue-500 text-white"
              >
                {mutation.isLoading ? "Signing Up ....." : "Register"}
              </button>
              <div className="flex justify-center mt-4 space-x-2">
                <span className="text-sm text-gray-500">
                  Already have an account?
                </span>
                <button
                  className="text-sm text-gray-500 font-bold"
                  onClick={transition}
                >
                  LogIn
                </button>
              </div>
              <div className="flex justify-center mt-4">
                <span className="text-sm text-gray-500">
                  ----------------------------or---------------------------
                </span>
              </div>
              <div className="flex justify-between mt-4 space-x-8">
                <button className="w-1/2 border py-3 my-4 rounded-xl  text-blue-500 border-blue-500">
                  Log In via Facebook
                </button>
                <button className="w-1/2 border py-3 my-4 rounded-xl  text-red-500 border-red-500">
                  Log In via Google
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default SigninModal;
