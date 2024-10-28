// components/projects/ProjectList.tsx
"use client";
import React, { useState } from "react";
import { projects } from "@/app/constants/ProjectsLists";
import { RiArrowDownSLine, RiArrowUpSLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectList() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleDropDown = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-5">
      <table className="table-auto w-full text-left border-collapse animate-fade-in">
        <thead className="border-y-2 border-gray-500">
          <tr className="bg-bg-color text-white">
            <th className="p-2">Name</th>
            <th className="p-2">Project Type</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <React.Fragment key={project.id}>
              <tr
                className="border-y-2 border-gray-500 cursor-pointer"
                onClick={() => toggleDropDown(index)}
              >
                <td className="p-2 text-main-color font-semibold px-2">
                  {project.title}
                </td>
                <td className="p-2 text-white">{project.about}</td>
                <td className="px-2">
                  <button
                    onClick={() => toggleDropDown(index)}
                    className="focus:outline-none"
                  >
                    {activeIndex === index ? (
                      <RiArrowUpSLine className="text-white hover:text-main-color" />
                    ) : (
                      <RiArrowDownSLine className="text-white hover:text-main-color" />
                    )}
                  </button>
                </td>
              </tr>
              {activeIndex === index && (
                <tr className="bg-gray-800 text-white">
                  <td colSpan={3} className="p-4">
                    <div className="flex flex-col items-center md:flex-row">
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={128}
                        height={128}
                        className="object-cover rounded-md"
                      />
                      <div>
                        <p className="my-2 p-5">{project.details}</p>
                        <Link
                          href={project.href}
                          className="text-main-500 underline px-6"
                        >
                          EXPLORE
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
