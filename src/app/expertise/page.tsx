import Image from "next/image";
import Link from "next/link";
import ToolsSkills from "../components/expertise/ToolsSkills";
import {
  WebApplicationDesktop1,
  WebApplicationDesktop2,
} from "../constants/Expertise";

export default function Expertise() {
  return (
    <div className="lg:h-[75vh] px-5">
      <div className=" mb-14">
        <h1 className=" text-2xl md:text-4xl text-center text-white animate-fade-in-short">
          Experienced in <br />{" "}
          <span className=" text-black text-outline">
            Web Application and System Development
          </span>
        </h1>

        <div className="flex justify-center md:justify-between md:px-10 mt-5 animate-fade-in-short ">
          <ul className=" hidden md:flex md:flex-col md:gap-5  md:justify-around md:animate-fade-in">
            {WebApplicationDesktop1.map((wad1) => (
              <li
                key={wad1.title}
                className=" flex flex-col items-center md:flex-row gap-6"
              >
                <Image
                  src={wad1.img}
                  alt={wad1.title}
                  width={100}
                  height={200}
                  className=" w-40 p-4 bg-white rounded-lg"
                />
                <div className=" text-center">
                  <h3 className=" text-main-color text-lg">{wad1.title}</h3>
                  <p>{wad1.details}</p>
                </div>
              </li>
            ))}
          </ul>
          <Image
            src="/expertise/code_bg.jpg"
            alt="code background"
            width={300}
            height={200}
            className="rounded-xl border-main-color border-2"
          />
          <ul className=" hidden md:flex md:flex-col md:gap-5  md:justify-around md:animate-fade-in">
            {WebApplicationDesktop2.map((wad2) => (
              <li
                key={wad2.title}
                className=" flex flex-col items-center md:flex-row gap-6"
              >
                <Image
                  src={wad2.img}
                  alt={wad2.title}
                  width={100}
                  height={200}
                  className=" w-40 p-4 bg-white rounded-lg"
                />
                <div className=" text-center">
                  <h3 className=" text-main-color text-lg">{wad2.title}</h3>
                  <p>{wad2.details}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ToolsSkills />
      <div className="mt-10 flex justify-center">
        <Link
          href="/projects"
          className=" border-main-color border-2 px-4 py-2 text-main-color "
        >
          View Projects
        </Link>
      </div>
    </div>
  );
}
