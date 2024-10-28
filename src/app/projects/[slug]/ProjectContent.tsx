// app/projects/[slug]/ProjectContent.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import {
  RiFullscreenLine,
  RiPlayCircleLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiCloseLine,
} from "@remixicon/react";
import { Project, ProjectShow } from "@/app/types/Project";

interface ProjectContentProps {
  project: Project;
  projectShow: ProjectShow;
}

export default function ProjectContent({
  project,
  projectShow,
}: ProjectContentProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullscreen, setShowFullscreen] = useState(false);

  const images = [
    projectShow.main,
    projectShow.second,
    projectShow.third,
    projectShow.fourth,
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-6 lg:p-12">
      {/* Project Title */}
      <h1 className="text-3xl font-bold text-main-color text-center mb-8">
        {project.title}
      </h1>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="relative w-full rounded-lg shadow-lg overflow-hidden">
          <Image
            src={images[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            width={800}
            height={450}
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-between p-2">
            <button
              onClick={prevImage}
              className="bg-main-color text-white p-2 rounded-full hover:bg-gray-700 transition-all focus:outline-none"
              aria-label="Previous image"
            >
              <RiArrowLeftSLine size={24} />
            </button>
            <button
              onClick={nextImage}
              className="bg-main-color text-white p-2 rounded-full hover:bg-gray-700 transition-all focus:outline-none"
              aria-label="Next image"
            >
              <RiArrowRightSLine size={24} />
            </button>
          </div>
          <div className="absolute top-4 right-4 space-x-3 flex">
            {projectShow.video && (
              <a
                href={projectShow.video}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/70 text-white p-2 rounded-full hover:bg-gray-700 transition-all focus:outline-none"
                aria-label="Watch video"
              >
                <RiPlayCircleLine size={24} />
              </a>
            )}
            <button
              onClick={() => setShowFullscreen(true)}
              className="bg-gray-800/70 text-white p-2 rounded-full hover:bg-gray-700 transition-all focus:outline-none"
              aria-label="View fullscreen"
            >
              <RiFullscreenLine size={24} />
            </button>
          </div>
        </div>

        {/* Project Details Section */}
        <div className="space-y-6">
          <div className="bg-gray-100 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-medium text-gray-700 mb-4">
              About the Project
            </h2>
            <p className="text-gray-600 mb-4">{project.details}</p>
            <p className="text-gray-700">
              <span className="font-semibold">Project Type: </span>
              <span className="text-gray-600">{project.about}</span>
            </p>
          </div>

          {/* Thumbnail Navigation */}
          <div className=" grid grid-cols-4 gap-3">
            {images.map((img, index) => (
              <button
                key={index}
                className={`aspect-w-16 aspect-h-9 rounded-lg overflow-hidden transition-transform hover:scale-105 focus:outline-none ${
                  index === currentImageIndex
                    ? "ring-2 ring-main-color"
                    : "ring-1 ring-gray-300"
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <Image
                  src={img}
                  alt={`${project.title} - Thumbnail ${index + 1}`}
                  width={150}
                  height={85}
                  objectFit="cover"
                  className="rounded-lg"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {showFullscreen && (
        <div
          className="fixed inset-0 bg-gray-900/90 z-50 flex items-center justify-center"
          onClick={() => setShowFullscreen(false)}
        >
          <div className="relative max-w-5xl w-full h-full p-4">
            <Image
              src={images[currentImageIndex]}
              alt={`${project.title} - Fullscreen`}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
            <button
              onClick={() => setShowFullscreen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors focus:outline-none"
              aria-label="Close fullscreen"
            >
              <RiCloseLine size={32} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
