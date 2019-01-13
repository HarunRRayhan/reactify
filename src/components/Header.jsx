import React from "react";
import logo from "../images/logo.png";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="app-header">
      <div className="bg-teal w-full px-2">
        <div className="container mx-auto">
          <div className="text-center text-white pb-16">
            <img
              src={logo}
              alt="Reactify"
              className="ml-2 mt-10"
              style={{ width: "100px" }}
            />
            <h1 className="mb-5">Reactify</h1>
            <h2 className="mb-20 font-normal">Learn thing smartly</h2>
          </div>
        </div>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
