import React, { useState } from "react";
import { Button, Card, Flex } from "@radix-ui/themes";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignupForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible((prevState) => !prevState);
  };
  return (
    <Card size="5" className="max-w-[35rem]">
      <h2 className="text-gray-300 font-extrabold text-3xl">
        Create your <span className="text-teal-600">Account</span>
      </h2>

      <Flex
        direction="column"
        justify="center"
        align="start"
        className="w-full mt-10"
      >
        <form className="w-full">
          {/* Full Name Field */}
          <label
            className="label inline-flex flex-col items-start gap-2 w-full mb-5"
            htmlFor="fullName"
          >
            <span className="text-gray-300">Full Name</span>
            <input
              id="fullName"
              className="outline-none rounded-md h-12 w-full p-3 text-md border border-teal-900 focus:border-teal-400 transition-colors duration-200"
            />
          </label>

          {/* Username Field */}
          <label
            className="label inline-flex flex-col items-start gap-2 w-full mb-5"
            htmlFor="username"
          >
            <span className="text-gray-300">Username</span>
            <input
              id="username"
              className="outline-none rounded-md h-12 w-full p-3 text-md border border-teal-900 focus:border-teal-400 transition-colors duration-200"
            />
          </label>

          {/* Password Field */}
          <Flex>
            <label
              className="label inline-flex flex-col items-start gap-2 w-full mb-5"
              htmlFor="password"
            >
              <span className="text-gray-300">Password</span>
              <div className="relative w-full">
                <input
                  id="password"
                  type={passwordVisible ? "text" : "password"}
                  className="outline-none rounded-md h-12 w-full p-3 text-md border border-teal-900 focus:border-teal-400 transition-colors duration-200"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </label>
            {/* Confirm Password Field */}
            <label
              className="label inline-flex flex-col items-start gap-2 w-full mb-5"
              htmlFor="confirmPassword"
            >
              <span className="text-gray-300">Confirm Password</span>
              <div className="relative w-full">
                <input
                  id="confirmPassword"
                  type={confirmPasswordVisible ? "text" : "password"}
                  className="outline-none rounded-md h-12 w-full p-3 text-md border border-teal-900 focus:border-teal-400 transition-colors duration-200"
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                >
                  {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </label>
          </Flex>

          {/* Gender Field with teal-colored radio buttons */}
          <div className="w-full mb-5">
            <span className="text-gray-300">Gender</span>
            <div className="flex items-center gap-5 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="h-4 w-4 accent-teal-600 border border-teal-900 focus:border-teal-400"
                />
                <span className="text-gray-300">Male</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="h-4 w-4 accent-teal-600 border border-teal-900 focus:border-teal-400"
                />
                <span className="text-gray-300">Female</span>
              </label>
            </div>
          </div>

          {/* Signup Button */}
          <Button
            style={{
              width: "100%",
              height: "40px",
              marginBottom: "16px",
              fontSize: "1.2rem",
            }}
            type="submit"
          >
            Sign Up
          </Button>
        </form>
        <p>
          Already have an account?{" "}
          <span className="pl-1 link link-info">Login here</span>
        </p>
      </Flex>
    </Card>
  );
};

export default SignupForm;
