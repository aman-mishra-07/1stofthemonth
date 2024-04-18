import React from "react";

const Loader = () => {
  return (
    <div className="fixed z-[100] inset-0 bg-white flex items-center justify-center">
      <svg className="loaderSvg " viewBox="25 25 50 50">
        <circle className="circleLoader" r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
  );
};

export default Loader;
