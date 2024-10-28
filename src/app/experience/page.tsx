import {
  RiCodeSSlashLine,
  RiAwardLine,
  RiBriefcaseLine,
  RiRocketLine,
  RiProjectorLine,
} from "@remixicon/react";
import Image from "next/image";
import experienceImage from "/public/experience_image.webp";
import mtdcUpm from "/public/mtdc_upm.webp";
import bubblesO2 from "/public/Bubbles-O2-3.webp";
import yg from "/public/yg.webp";

export default function Experience() {
  return (
    <div className=" flex flex-col items-center text-white px-5 py-12 space-y-12">
      {/* Title */}
      <h1 className="text-5xl font-extrabold tracking-wide text-main-color text-center">
        My Journey
      </h1>

      {/* Experience 1 - Freelance Journey */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={experienceImage}
            alt="Freelance Experience"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section - Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <RiCodeSSlashLine className="text-main-color text-5xl" />
          <h2 className="text-3xl font-bold">Freelance Developer</h2>
          <p className="text-gray-400 leading-relaxed">
            In **2023**, I started my freelance journey, mainly focusing on
            creating websites for companies, especially in the restaurant
            sector. During this time, I sharpened my skills in web development,
            learned how to deliver high-quality products under deadlines, and
            developed a deeper understanding of how businesses can benefit from
            a strong online presence.
          </p>
        </div>
      </div>

      {/* Experience 2 - TechnoTube & MTDC */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Left Section - Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <RiAwardLine className="text-main-color text-5xl" />
          <h2 className="text-3xl font-bold">MTDC TechnoTube & YoungGuards</h2>
          <p className="text-gray-400 leading-relaxed">
            In **2023**, I was lucky enough to be chosen for the **MTDC
            TechnoTube event**, which provides funding for young entrepreneurs
            to build **4IR technology**. This was a pivotal moment for me as I
            began working on **YoungGuards**, a project that aims to educate
            people about cybercrime prevention. The journey has been incredibly
            rewarding, and I continue to develop **YoungGuards** as my personal
            contribution to the world of tech.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={mtdcUpm}
            alt="TechnoTube & YoungGuards"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Experience 3 - Bubbles O2 Marketing SDN BHD */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={bubblesO2}
            alt="Bubbles O2 Marketing"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section - Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <RiBriefcaseLine className="text-main-color text-5xl" />
          <h2 className="text-3xl font-bold">
            Developer at Bubbles O2 Marketing
          </h2>
          <p className="text-gray-400 leading-relaxed">
            In **February 2024**, I joined **Bubbles O2 Marketing SDN BHD** as a
            **developer**. This role allowed me to expand my skills in
            developing **admin systems**, **operation systems**, and learning
            about various technologies such as **CCTV integration** and **drone
            implementations for site views**. I thoroughly enjoy my work here,
            as it has given me exposure to real-world applications and
            opportunities to grow both technically and professionally.
          </p>
        </div>
      </div>

      {/* Experience 4 - Future Vision */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Left Section - Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <RiRocketLine className="text-main-color text-5xl" />
          <h2 className="text-3xl font-bold">Building for the Future</h2>
          <p className="text-gray-400 leading-relaxed">
            As I continue to work on my own projects like **YoungGuards** while
            contributing to **Bubbles O2**, I aim to make an impact in the tech
            world by creating solutions that enhance safety and security for
            individuals and businesses alike. The journey so far has been
            exciting, and I'm committed to pushing the boundaries of what
            technology can do for society.
          </p>
          <a
            href="http://hallucinationsdigital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-main-color hover:text-second-color font-semibold"
          >
            Discover the Latest on YoungGuards
          </a>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={yg}
            alt="Future Vision"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
