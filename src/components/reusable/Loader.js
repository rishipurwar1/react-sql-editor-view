import React from "react";
import LoaderSVG from "../../assets/imgs/loader.svg";

const Loader = () => {
  return (
    <div className="w-screen h-screen bg-transparent flex items-center justify-center">
      Loading...
      <img src={LoaderSVG} className="" alt="loader" />
    </div>
  );
};

export default Loader;
