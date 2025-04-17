import React from 'react';
import { Link } from "react-router-dom";
import IntroductionAuthPage from "./IntroductionAuthPage";

const LayoutAuthPage = ({ name, link, introductionText }) => {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-gray-900 text-white p-12 flex-col justify-between">
      <div>
        <div className="flex items-center my-4 ml-8">
          <span className="text-3xl"></span>
          <h3 className="text-3xl font-bold">YouQuote</h3>
        </div>
      </div>

      <div className="ml-8">
        <h1 className="text-5xl font-bold leading-tight">
          Bienvenue à YouQuote
        </h1>
        <IntroductionAuthPage text={introductionText} />

        <Link
          to={link}
          className="inline-block mt-8 px-8 py-2 text-white border-2 border-white rounded-md hover:bg-white hover:text-gray-900 transition duration-300"
        >
          {name}
        </Link>
      </div>
      
      <div></div>
    </div>
  );
};

export default LayoutAuthPage; 