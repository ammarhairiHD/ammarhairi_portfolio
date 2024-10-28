import {
  RiCodeSSlashLine,
  RiAwardLine,
  RiBriefcaseLine,
  RiRocketLine,
} from "@remixicon/react";
import Image from "next/image";
import experienceImage from "/public/experience_image.webp";
import mtdcUpm from "/public/mtdc_upm.webp";
import bubblesO2 from "/public/Bubbles-O2-3.webp";
import yg from "/public/yg.webp";

export default function Experience() {
  return (
    <div className="flex flex-col items-center text-white px-5 py-12 space-y-12">
      {/* Title */}
      <h1 className="text-5xl font-extrabold tracking-wide text-main-color text-center">
        My Journey
      </h1>

      {/* Experience 1 - Freelance Journey */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-5xl">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src={experienceImage}
            alt="Freelance Experience"
            width={500}
            height={350}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Section - Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <RiCodeSSlashLine className="text-main-color text-5xl" />
          <h2 className="text-3xl font-bold">Freelance Developer</h2>
          <p className="text-gray-400 leading-relaxed">
            In <strong>2023</strong>, I started my freelance journey, mainly
            focusing on creating websites for companies, especially in the
            restaurant sector. During this time, I sharpened my skills in web
            development, learned how to deliver high-quality products under
            deadlines, and developed a deeper understanding of how businesses
            can benefit from a strong online presence.
          </p>
        </div>
      </div>

      {/* Experience 2 - TechnoTube & MTDC */}
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8 max-w-5xl">
        {/* Left Section - Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <RiAwardLine className="text-main-color text-5xl" />
          <h2 className="text-3xl font-bold">MTDC TechnoTube & YoungGuards</h2>
          <p className="text-gray-400 leading-relaxed">
            In <strong>2023</strong>, I was lucky enough to be chosen for the{" "}
            <strong>MTDC TechnoTube event</strong>, which provides funding for
            young entrepreneurs to build <strong>4IR technology</strong>. This
            was a pivotal moment for me as I began working on{" "}
            <strong>YoungGuards</strong>, a project that aims to educate people
            about cybercrime prevention. The journey has been incredibly
            rewarding, and I continue to develop <strong>YoungGuards</strong> as
            my personal contribution to the world of tech.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src={mtdcUpm}
            alt="TechnoTube & YoungGuards"
            width={500}
            height={350}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Experience 3 - Bubbles O2 Marketing SDN BHD */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-5xl">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src={bubblesO2}
            alt="Bubbles O2 Marketing"
            width={500}
            height={350}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Section - Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <RiBriefcaseLine className="text-main-color text-5xl" />
          <h2 className="text-3xl font-bold">
            Developer at Bubbles O2 Marketing
          </h2>
          <p className="text-gray-400 leading-relaxed">
            In <strong>February 2024</strong>, I joined{" "}
            <strong>Bubbles O2 Marketing SDN BHD</strong> as a
            <strong>developer</strong>. This role allowed me to expand my skills
            in developing <strong>admin systems</strong>,{" "}
            <strong>operation systems</strong>, and learning about various
            technologies such as <strong>CCTV integration</strong> and{" "}
            <strong>drone implementations for site views</strong>. I thoroughly
            enjoy my work here, as it has given me exposure to real-world
            applications and opportunities to grow both technically and
            professionally.
          </p>
        </div>
      </div>

      {/* Experience 4 - Future Vision */}
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8 max-w-5xl">
        {/* Left Section - Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <RiRocketLine className="text-main-color text-5xl" />
          <h2 className="text-3xl font-bold">Building for the Future</h2>
          <p className="text-gray-400 leading-relaxed">
            As I continue to work on my own projects like{" "}
            <strong>YoungGuards</strong> while contributing to{" "}
            <strong>Bubbles O2</strong>, I aim to make an impact in the tech
            world by creating solutions that enhance safety and security for
            individuals and businesses alike. The journey so far has been
            exciting, and I&apos;m committed to pushing the boundaries of what
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
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src={yg}
            alt="Future Vision"
            width={500}
            height={350}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
