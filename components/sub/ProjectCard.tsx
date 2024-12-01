import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transition-all duration-300 hover:shadow-xl hover:scale-105 hover:opacity-90">
      <div className="relative w-full h-64">
        <Image
          src={src}
          alt={title}
          layout="fill"  // Makes the image fill the parent div
          objectFit="cover"  // Ensures the image covers the entire area
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
