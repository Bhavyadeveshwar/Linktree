import React from "react";

function LinkTemp({ link, logo, name }) {
  return (
    <div className="bg-white px-56 py-3 rounded-xl hover:scale-105 duration-200">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className=" text-purple-900 font-bold rounded mb-4 hover:scale-105 duration-200"
      >
        {" "}
        <div className="flex flex-wrap items-center">
          <img src={logo} alt="" className="w-10 h-10 mr-4 " />
          {name}{" "}
        </div>
      </a>
    </div>
  );
}

export default LinkTemp;
