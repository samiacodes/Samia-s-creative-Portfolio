"use client";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        {/* <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        /> */}
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Got something <span className="text-purple">exciting</span> in mind?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          I&apos;d love to hear it. Drop me a message!
        </p>
        {/* <a href="mailto:emiliyalamia@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a> */}
        <div className="flex flex-col items-center gap-4 mt-6 text-white-200 text-sm text-center">
          {/* Primary CTA */}
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
            as="a"
            href="mailto:emiliyalamia@gmail.com"
          />

          {/* Secondary contact links */}
          <div className="flex items-center justify-center gap-3">
            <p>
              Phone:{" "}
              <a
                href="tel:+8801640475800"
                className="hover:text-purple transition-colors duration-200 underline underline-offset-4"
              >
                +880 1640475800
              </a>
            </p>
            <p>
              WhatsApp:{" "}
              <a
                href="https://wa.me/8801640475800"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple transition-colors duration-200 underline underline-offset-4"
              >
                Message me
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Samia Islam Lamia
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
