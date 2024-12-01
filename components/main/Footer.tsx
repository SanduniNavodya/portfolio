import React from "react";
import Link from "next/link";
import Image from "next/image";

// Socials array with links and icon sources
const Socials = [
  {
    name: "LinkedIn",
    src: "/linkedin.png",
    url: "https://www.linkedin.com/in/sanduni-navodya-b3a370282",
  },
  {
    name: "GitHub",
    src: "/gitwhite.png",
    url: "https://github.com/SanduniNavodya",
  },
  {
    name: "Facebook",
    src: "/facebook.png",
    url: "https://www.facebook.com/profile.php?id=100078203752777",
  },
  {
    name: "Instagram",
    src: "/instagram.png",
    url: "https://www.instagram.com/sanduninavodya01/profilecard/?igsh=MWM2czFscmUwaHdjZg==",
  },
];

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {/* Profile Image Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-8 border-transparent bg-clip-border bg-gradient-to-r from-purple-500 to-cyan-500">
              <Image
                src="/Sanduni.jpeg"
                alt="Sanduni Navodya"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
          </div>

          {/* Education Section */}
          <div className="min-w-[400px] h-auto flex flex-col items-start space-y-4">
            <h2 className="font-bold text-[18px] mb-4">Education</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Image
                  src="/school.png"
                  alt="H/Theraputtal National School"
                  width={40}
                  height={40}
                  className="object-cover"
                />
                <div>
                  <p className="font-semibold text-white">H/Theraputtal National School</p>
                  <p className="text-gray-400 text-sm">2012 - 2021</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Image
                  src="/diploma.png"
                  alt="ICBT Southern Campus"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">ICBT Southern Campus</p>
                  <p className="text-gray-400 text-sm">2022</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Image
                  src="/uni.png"
                  alt="Sri Lanka Institute of Information Technology (SLIIT)"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">
                    Sri Lanka Institute of Information Technology (SLIIT)
                  </p>
                  <p className="text-gray-400 text-sm">2022 - Current</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            {Socials.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                  <span className="text-[15px] ml-[6px]">{social.name}</span>
                </p>
              </Link>
            ))}
          </div>

          {/* About Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Hiring me</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Learning about me</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">sanduninavodya01@gmail.com</span>
            </p>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="mb-[20px] text-[15px] text-center">
          &copy; All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
