import React from "react";
import LoaderSVG from "../../assets/imgs/loader.svg";

const Loader = () => {
  return (
    <div className="w-screen h-screen bg-transparent flex items-center justify-center">
      <img src={LoaderSVG} className="w-20" alt="loader" />
    </div>
  );
};

export default Loader;
