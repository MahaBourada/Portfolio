import React from "react";
import useScrollDirection from "../hooks/useScrollDirection";
import NavBar from "./Global/NavBar";
import { X, Menu } from "lucide-react";

const Header = ({ handleMobileNav, show, resetShowState }) => {
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } transition-all duration-500 z-20 sticky`}
    >
      {/* shadow-md bg-background-100 z-50 sticky */}
      
      <div className="hidden lg:block">
        <NavBar resetShowState={resetShowState} />
      </div>

      <div className="lg:hidden">
        {!show ? (
          <button
            className="p-2 rounded-b-xl float-right bg-background-100"
            onClick={handleMobileNav}
          >
            <Menu size={40} color="#003049" strokeWidth={3} />
          </button>
        ) : (
          <>
            <button
              className="m-2 float-right invisible inline"
              onClick={handleMobileNav}
            >
              <X size={40} color="#003049" strokeWidth={3} />
            </button>

            <div className="fixed flex flex-col items-end right-0 -z-50 bg-background-100 shadow-sm">
              <button className="m-2 float-right" onClick={handleMobileNav}>
                <X size={40} color="#003049" strokeWidth={3} />
              </button>
              <NavBar resetShowState={resetShowState} />
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
