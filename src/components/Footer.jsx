import React from "react";
import { logo } from "../assets";
import { socialMedia, contactUs } from "../constants";
import { Link } from "react-router-dom";
import {
  About,
  Diamond,
  Gallery,
  HowToShop,
  Payment,
  Return,
  Privacy,
} from "../assets";

function Footer() {
  return (
    <footer className="bg-black text-white font-primary py-10 px-5 lg:px-0">
      <div className="flex justify-center text-center sm:text-left sm:justify-between items-start flex-wrap gap-10 w-full max-w-[1080px] mx-auto">
        <div className="flex flex-col items-center justify-center">
          <img src={logo} alt="" className="w-[150px] h-[150px]" />
          <div className="flex gap-5 text-md">
            {socialMedia.map((social, index) => (
              <a
                key={social.link}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <img src={social.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <p className="text-md border-b-2 pb-2 uppercase font-semibold text-sm">
            Contact US
          </p>
          <div className="flex flex-col gap-6">
            {contactUs.map((contact) => (
              <span key={contact.text} className="flex gap-3 text-md">
                <img src={contact.icon} alt="" className="w-5 h-5" />
                <p className="text-xs">{contact.text}</p>
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <p className="text-md border-b-2 pb-2 uppercase font-semibold text-sm">
            Information
          </p>
          <div className="flex flex-col gap-6">
            <Link to="/about" className="flex gap-3 text-md">
              <img src={About} alt="" className="w-5 h-5" />
              <p className="text-xs">About Us</p>
            </Link>
            <Link to="/gemstones" className="flex gap-3 text-md">
              <img src={Diamond} alt="" className="w-5 h-5" />
              <p className="text-xs">Gemstones</p>
            </Link>
            <Link to="/gallery" className="flex gap-3 text-md">
              <img src={Gallery} alt="" className="w-5 h-5" />
              <p className="text-xs">Gallery</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <p className="text-md border-b-2 pb-2 uppercase font-semibold text-sm">
            Help & Support
          </p>
          <div className="flex flex-col gap-6">
            
              <span  className="flex gap-3 text-md">
                <img src={HowToShop}  alt="" className="w-5 h-5" />
                <p className="text-xs">How To Shop</p>
              </span>

              <span  className="flex gap-3 text-md">
                <img src={Payment}  alt="" className="w-5 h-5" />
                <p className="text-xs">Payments</p>
              </span>

              <span  className="flex gap-3 text-md">
                <img src={Return}  alt="" className="w-5 h-5" />
                <p className="text-xs">Returns</p>
              </span>

              <span  className="flex gap-3 text-md">
                <img src={HowToShop}  alt="" className="w-5 h-5" />
                <p className="text-xs">Privacy & Cookies Policy</p>
              </span>
           
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
