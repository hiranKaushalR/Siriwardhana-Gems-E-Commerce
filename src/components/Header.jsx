import React, { useState } from "react";
import { logo } from "../assets";
import { NavLink } from "react-router-dom";
import { IconX, IconMenu2 } from "@tabler/icons-react";
import { Button, Drawer } from "flowbite-react";

function Header() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center xl:p-4 font-primary font-bold w-full max-w-[1080px] mx-auto px-3">
      <div>
        <img src={logo} alt="logo" className="w-16 h-16" />
      </div>

      <div className="hidden sm:flex gap-8 text-md text-primaryText">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-secondaryText"
              : "hover:text-secondaryText transition-all duration-300"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/gemstones"
          className={({ isActive }) =>
            isActive
              ? "text-secondaryText"
              : "hover:text-secondaryText transition-all duration-300"
          }
        >
          Gemstones
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive
              ? "text-secondaryText"
              : "hover:text-secondaryText transition-all duration-300"
          }
        >
          Gallery
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-secondaryText"
              : "hover:text-secondaryText transition-all duration-300"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-secondaryText"
              : "hover:text-secondaryText transition-all duration-300"
          }
        >
          About
        </NavLink>
      </div>

      <div className="relative sm:hidden block">
        <div
          className="sm:hidden block cursor-pointer"
          onClick={() => {
            setIsNavBarOpen(!isNavBarOpen);
          }}
        >
          {isNavBarOpen ? (
            <IconX className="text-primaryText w-8 h-8" />
          ) : (
            <IconMenu2 className="text-primaryText w-8 h-8" />
          )}
        </div>
        <Drawer
          open={isNavBarOpen}
          onClose={() => setIsNavBarOpen(false)}
          position="right"
        >
          <Drawer.Header />
          <Drawer.Items>
            <ul className="flex flex-col gap-4 my-5">
              <NavLink to="/">
                <li>Home</li>
              </NavLink>
              <NavLink to="/gemstones">
                <li>Gemstones</li>
              </NavLink>
              <NavLink to="/gallery">
                <li>Gallery</li>
              </NavLink>
              <NavLink to="/contact">
                <li>Contact Us</li>
              </NavLink>
              <NavLink to="/about">
                <li>About Us</li>
              </NavLink>
            </ul>
          </Drawer.Items>
        </Drawer>
      </div>
    </nav>
  );
}

export default Header;