"use client";
import Link from "next/link";
import { Header_Links } from "../constants/HeaderLinks";
import { RiLoginBoxLine, RiMenuLine, RiCloseLargeLine } from "@remixicon/react";
import { useState } from "react";

export default function Header() {
  const [isToggle, setisToggle] = useState(false);

  const toggleNavbar = (): void => {
    setisToggle(!isToggle);
  };
  return (
    <nav className="fixed flex justify-between px-4 py-2 w-full h-24 bg-bg-color z-50">
      <Link
        href="/"
        className=" border-l-4 border-l-main-color border-t-4 border-t-main-color px-4 py-2"
      >
        <h1 className=" font-extrabold uppercase text-second-color">
          Ammar <br /> Hairi
        </h1>
      </Link>
      <div className="w-screen">
        <ul className="hidden h-full gap-12 md:flex md:pt-5 md:flex-row md:justify-center">
          {Header_Links.map((hl) => (
            <Link
              href={hl.href}
              key={hl.title}
              className=" text-gray-200 hover:text-main-color"
            >
              <span className=" mr-4 text-main-color font-bold">//</span>{" "}
              {hl.title}
            </Link>
          ))}
        </ul>
      </div>

      <div className="md:hidden flex items-center">
        <button
          className=" inline-flex items-center justify-center p-2 rounded-md text-main-color  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          onClick={toggleNavbar}
        >
          {isToggle ? (
            <RiCloseLargeLine className="text-second-color" />
          ) : (
            <RiMenuLine className=" text-main-color" />
          )}
        </button>
      </div>

      {isToggle && (
        <div className=" md:hidden">
          <ul className="flex flex-col gap-7 bg-bg-color w-full p-5 relative">
            {Header_Links.map((hl) => (
              <Link
                href={hl.href}
                key={hl.title}
                className=" text-gray-200 hover:text-main-color"
              >
                <span className=" text-main-color mr-2">//</span>
                {hl.title}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
