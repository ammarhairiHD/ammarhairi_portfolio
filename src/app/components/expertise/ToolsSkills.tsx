import { WebApplication } from "@/app/constants/Expertise";
import Image from "next/image";

export default function ToolsSkills() {
  return (
    <div className="">
      <ul className=" flex flex-col md:hidden gap-12 justify-center animate-fade-in">
        {WebApplication.map((wa) => (
          <li
            key={wa.title}
            className=" flex flex-col items-center md:flex-row gap-6"
          >
            <Image
              src={wa.img}
              alt={wa.title}
              width={100}
              height={200}
              className=" w-40 p-4 bg-white rounded-lg"
            />
            <div className=" text-center">
              <h3 className=" text-main-color text-lg">{wa.title}</h3>
              <p>{wa.details}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
