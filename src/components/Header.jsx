import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/VFilmsLogo.png";

function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Services", href: "/services" },
    { name: "Their Stories", href: "/portfolio" },
    { name: "Our Story", href: "/about-us" },
    { name: "Varnan", href: "/" },
    { name: "Let's Talk", href: "/contact", button: true },
  ];

  return (
    <div className="fixed top-8 left-10 right-10 flex justify-between items-center z-[3000]">
      
      {/* ✅ Logo on LEFT */}
      <Link to="/">
        <img src={Logo} alt="Vfilms logo" className="w-28 h-auto" />
      </Link>

      {/* ✅ NAV + HAMBURGER on RIGHT */}
      <div className="flex flex-row items-center gap-5 relative">

        {/* ✅ DESKTOP NAV */}
        {open && (
          <div className="hidden md:flex flex-row gap-5 items-center animate-[fadeIn_0.4s_ease_forwards]">
            {links.map((link, index) =>
              link.button ? (
                <Link to={link.href} key={index}>
                  <button
                    className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700"
                  >
                    {link.name}
                  </button>
                </Link>
              ) : (
                <Link
                  key={index}
                  to={link.href}
                  className="hover:text-orange-600 py-2"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        )}

        {/* ✅ MOBILE DROPDOWN MENU */}
        {open && (
          <div
            className="
              md:hidden
              absolute top-14 right-0
              w-[200px]
              bg-white shadow-xl rounded-lg
              flex flex-col gap-4 p-5
              origin-top
              animate-dropdown
            "
          >
            {links.map((link, index) =>
              link.button ? (
                <Link to={link.href} key={index}>
                  <button
                    className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 w-full"
                  >
                    {link.name}
                  </button>
                </Link>
              ) : (
                <Link
                  key={index}
                  to={link.href}
                  className="hover:text-orange-600 text-lg"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        )}

        {/* ✅ HAMBURGER BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="relative w-10 h-8 flex flex-col justify-between cursor-pointer transition-all z-[4000]"
        >
          <div
            className={`h-[3px] bg-black rounded-sm transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>

          <div
            className={`h-[3px] bg-black rounded-sm transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>
      </div>
    </div>
  );
}

export default Header;
