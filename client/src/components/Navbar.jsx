import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useAuth } from "../store/auth";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const { isLoggedIn } = useAuth();

  return (
    <header className="p-4 bg-purple-200">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-700 text-lg font-bold">
          <NavLink to="/">MERN-APP</NavLink>
        </div>

        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={handleToggleMenu}
          >
            {isMenuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
          </button>
        </div>

        <nav
          className={`md:flex md:items-center md:space-x-4  ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-8 md:flex-row md:gap-8 space-y-4 md:space-y-0">
            <li className="text-gray-700 font-bold">
              <NavLink to="/" onClick={handleToggleMenu}>
                Home
              </NavLink>
            </li>
            <li className="text-gray-700 font-bold">
              <NavLink to="/about" onClick={handleToggleMenu}>
                About
              </NavLink>
            </li>
            <li className="text-gray-700 font-bold">
              <NavLink to="/contact" onClick={handleToggleMenu}>
                Contact
              </NavLink>
            </li>
            <li className="text-gray-700 font-bold">
              <NavLink to="/signup" onClick={handleToggleMenu}>
                SignUp
              </NavLink>
            </li>
            {isLoggedIn ? (
              <li className="text-gray-700 font-bold">
                <NavLink to="/logout" onClick={handleToggleMenu}>
                  Logout
                </NavLink>
              </li>
            ) : (
              <>
                <li className="text-gray-700 font-bold">
                  <NavLink to="/service" onClick={handleToggleMenu}>
                    Service
                  </NavLink>
                </li>
                <li className="text-gray-700 font-bold">
                  <NavLink to="/login" onClick={handleToggleMenu}>
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
