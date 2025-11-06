import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Outlet } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Expertise", id: "expertise" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isShrunk ? "bg-neutral-900  shadow-md py-2" : "bg-neutral-900 py-4"
        }`}
        role="navigation"
        aria-labelledby="navbar-label"
      >
        <span id="navbar-label" className="sr-only">
          Navbar
        </span>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-end">
          {/* Logo */}
          {/* <div className="text-white text-xl font-semibold">MySite</div> */}

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white md:hidden focus:outline-none focus:ring-2 focus:ring-white rounded"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Links */}
          <ul
            id="mobile-menu"
            className={`flex flex-col md:flex-row md:space-x-6 text-white text-base transition-all duration-300 ${
              isOpen
                ? "absolute top-full left-0 w-full bg-neutral-900  md:static md:flex"
                : "hidden md:flex"
            }`}
          >
            {navItems.map(({ name, id }) => (
              <li
                key={id}
                className="p-2 mr-2  md:py-0 xs:mr-0 text-left md:text-right"
              >
                <Link
                  to={id}
                  spy
                  smooth
                  offset={-50}
                  duration={300}
                  delay={100}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer block hover:text-gray-400 transition-colors duration-200"
                  tabIndex={0}
                  aria-label={`Navigate to ${name} section`}
                  onKeyDown={(e: React.KeyboardEvent) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      document
                        .getElementById(id)
                        ?.scrollIntoView({ behavior: "smooth" });
                      setIsOpen(false);
                    }
                  }}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
