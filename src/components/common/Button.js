import React from "react";

const Button = ({ type, text, loading }) => (
  <button
    type={type}
    className="group relative flex justify-center py-2 px-4 text-sm font-medium rounded-md text-blue bg-gradient focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-100 ease-in-out shadow-lg"
  >
    {loading ? (
      <span className="flex items-center">
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="blue"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="blue"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <span className="ml-2">Loading...</span>
      </span>
    ) : (
      <span>{text}</span>
    )}
  </button>
);

export default Button;
