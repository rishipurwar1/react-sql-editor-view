import React from "react";
import TABLE_NAMES from "../../constants/constants";
import { convertToNormalString } from "../../modules/list";

const Navbar = React.memo(({ setQuery, setValue, isOpen, setIsOpen }) => {
  const handleQuery = (queryName) => {
    setQuery(queryName);
    setValue(`select * from ${queryName}`);
  };
  return (
    <>
      <nav
        className={`${
          isOpen ? "col-start-2" : "col-start-1"
        } col-end-3 row-start-1 row-end-2 bg-primary-dark shadow`}
      >
        <div className="px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white mr-4 text-2xl cursor-pointer h-8 w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <a className="text-white font-bold align-middle" href="/">
                  Atlan SQL Editor
                </a>
              </div>

              <a
                className="text-gray-300 hover:text-white py-2 rounded-md text-sm font-medium"
                href="/#"
                title="github repository"
              >
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="text-lg leading-lg text-white opacity-75 hover:opacity-100 transition-opacity"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="relative col-start-1 col-end-2 row-start-1 row-end-5">
          <div className="bg-secondary-dark text-white w-72 px-3 fixed top-0 bottom-0 z-50 min-h-screen overflow-y-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-white m-4 text-2xl cursor-pointer float-right h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
              onClick={() => setIsOpen(!isOpen)}
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <nav className="p-5">
              {TABLE_NAMES.map((name) => {
                const finalName = convertToNormalString(name);
                return (
                  <button
                    className="flex items-center p-2 my-6 transition-colors text-secondary-light hover:text-white hover:bg-primary-dark duration-200 rounded-lg "
                    key={name}
                    onClick={() => {
                      handleQuery(name);
                      setIsOpen(!isOpen);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="mx-4 text-base font-normal">
                      {finalName}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
});

export default Navbar;
