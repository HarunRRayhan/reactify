import React from "react";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-dark p-6">
      {/* <div className="flex items-center flex-no-shrink text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
      </div> */}
      <div className="block lg:hidden container  mx-auto">
        <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto container mx-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4 no-underline"
          >
            Home
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4 no-underline"
          >
            Examples
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white no-underline"
          >
            Blog
          </a>
        </div>
        <div>
          <a
            href="#black"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0 no-underline"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
