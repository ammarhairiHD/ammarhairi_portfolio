"use client";

import { ContactMe } from "../constants/ContactMe";
import { useState } from "react";

export default function Contact() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className=" h-[70vh] lg:h-[75vh] flex items-center justify-center p-4">
      <div className=" rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className=" text-3xl font-bold  mb-6 text-center">Get in Touch</h1>
        <p className=" mb-8 text-center">
          I'd love to hear from you! Choose your preferred method of
          communication below.
        </p>
        <div className="space-y-4">
          {ContactMe.map((method, index) => (
            <a
              key={method.key}
              href={method.mailto || method.number}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`flex items-center p-4 rounded-lg transition-all duration-300 ease-in-out ${
                  hoveredIndex === index ? "bg-main-color shadow-md" : ""
                }`}
              >
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <i className={`${method.icon} text-blue-500 text-xl`}></i>
                </div>
                <span className="text-lg font-medium text-second-color">
                  {method.key}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
