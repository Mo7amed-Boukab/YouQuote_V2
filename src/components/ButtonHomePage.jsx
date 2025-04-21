import React from "react";

const ButtonHomePage = ({ onClick, children }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded text-md text-white"
    >
      {children}
    </button>
  );
};

export default ButtonHomePage;
