import React, { useState } from "react";
import { Button, Card, Flex } from "@radix-ui/themes";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignupForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <Card size="5" className="max-w-[35rem]">
      <h2 className="text-gray-300 font-extrabold text-3xl">
        Login to your <span className="text-teal-600">Account</span>
      </h2>

      <Flex
        direction="column"
        justify="center"
        align="start"
        className="w-full mt-10"
      >
        {/* Form element wrapping input fields and button */}
        <form className="w-full">
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

          {/* Button with full width */}
          <Button
            style={{
              width: "100%",
              height: "40px",
              marginBottom: "16px",
              fontSize: "1.2rem",
            }}
            type="submit"
          >
            Login
          </Button>
        </form>
        <p>
          Don't have an account?{" "}
          <span className="pl-1 link link-info">Create One</span>
        </p>
      </Flex>
    </Card>
  );
};

export default SignupForm;
