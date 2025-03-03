"use client";
import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration- bg-bg_navbar shadow-md`}
    >
      {/* Navbar Content */}
      <div className="max-w-screen-xl mx-auto md:px-4 p-0">
        {/* Desktop Navbar */}
        <div className={`hidden md:flex flex-col items-center space-y-0`}>
          <div className="flex space-x-4 text-[15px] leading-[60px] uppercase font-galdeano">
            <a
              href="/"
              className={`tracking-[0.3em] text-bg_intro hover:text-white_color`}
            >
              Home
            </a>
            <a
              href="/#about"
              className={`tracking-[0.3em] text-bg_intro hover:text-white_color`}
            >
              A Propos
            </a>
            <a
              href="/#gallery"
              className={`tracking-[0.3em] text-bg_intro hover:text-white_color`}
            >
              Galerie
            </a>
            <a
              href="/#activities"
              className={`tracking-[0.3em] text-bg_intro hover:text-white_color`}
            >
              Activités
            </a>
            <a
              href="/carte-casa-lalla-takerkoust.pdf"
              target="_blank"
              className={`tracking-[0.3em] text-bg_intro hover:text-white_color`}
            >
              Menu
            </a>
            <a
              href="/#contact"
              className={`tracking-[0.3em] text-bg_intro hover:text-white_color`}
            >
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex justify-between items-center bg-bg_intro px-5 py-1">
          <div className="text-2xl font-semibold">
            <img src="/logo-2.png" className="w-20 h-20" alt="Logo" />
          </div>
          <button
            className="text-xl text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {/* Full-screen mobile menu */}
          <Transition
            show={isOpen}
            enter="transition ease-out duration-700"
            enterFrom="transform translate-x-full opacity-0"
            enterTo="transform translate-x-0 opacity-100"
            leave="transition ease-in duration-500"
            leaveFrom="transform translate-x-0 opacity-100"
            leaveTo="transform translate-x-full opacity-0"
          >
            <div className="fixed top-[5.5rem] right-0 z-10 w-full h-screen bg-white flex flex-col items-left justify-between px-20">
              <ul
                onClick={() => setIsOpen(false)}
                className="space-y-8 text-bg_intro leading-[25px] text-[20px] mt-10 uppercase font-light"
              >
                <li className="pb-3 border-b border-bg_navbar">
                  <Link href="/">Home</Link>
                </li>
                <li className="pb-3 border-b border-bg_navbar">
                  <Link href="/#about">A Propos</Link>
                </li>
                <li className="pb-3 border-b border-bg_navbar">
                  <Link href="/#gallery">Galerie</Link>
                </li>
                <li className="pb-3 border-b border-bg_navbar">
                  <Link href="/#activities">Activité</Link>
                </li>
                <li className="pb-3 border-b border-bg_navbar">
                  <Link href="/carte-casa-lalla-takerkoust.pdf" target="_blank">
                    Menu
                  </Link>
                </li>
                <li className="pb-3 border-b border-bg_navbar">
                  <Link href="/#contact">Contact</Link>
                </li>
              </ul>
            </div>
          </Transition>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
