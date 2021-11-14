import React from "react";

const Footer = React.memo(({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "col-start-2" : "col-start-1"
      } col-end-3 row-start-4 row-end-5 bg-primary-dark text-white text-center py-5`}
    >
      Made with{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 inline text-red-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <title id="heart">Made With Love</title>
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </svg>{" "}
      by{" "}
      <a
        href="https://github.com/rishipurwar1"
        target="_blank"
        rel="noreferrer"
        className="underline"
      >
        Rishi Purwar
      </a>{" "}
      for{" "}
      <a
        href="https://atlan.com/"
        target="_blank"
        rel="noreferrer"
        className="underline"
      >
        Atlan
      </a>
    </div>
  );
});

export default Footer;
