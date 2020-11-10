import React from "react";
import { ButtonType, ButtonSize } from "./theme";

function Button2({ size, type, children, loading, active }) {
  // This can be improved. I’m keeping it simple here by joining two strings.
  const classNames = ButtonType[type] + " " + ButtonSize[size];

  return (
    <button className={classNames}>
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
              stroke="white"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="white"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span className="ml-2">Loading...</span>
        </span>
      ) : (
        { children }
      )}
    </button>
  );
}
export default Button2;
