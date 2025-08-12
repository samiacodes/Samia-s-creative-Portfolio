import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";
import MagicButton from "./MagicButton";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"
        />
      </div>

      <div className="flex justify-between relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* LEFT: Text content */}
          <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
            <p className="uppercase tracking-widest text-xs text-blue-100 max-w-80">
              Building Scalable Web Solutions with the MERN Stack
            </p>
            <h1 className="heading">
              Turning Code into Creative, Functional{" "}
              <span className="text-purple">User Experiences</span>
            </h1>

            <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi! I&apos;m{" "}
              <span className="text-blue-300 font-semibold">
                Samia Islam Lamia
              </span>
              , a Full Stack Web Developer based in Dhaka, Bangladesh.
            </p>
            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>

          {/* RIGHT: Image */}
          <div className="flex-shrink-0">
            <Image
              src="/images/profile.png"
              alt="Adrian"
              width={350} // same as w-64
              height={350} // same as h-64
              className="rounded-full object-cover border-4 border-purple-500 shadow-lg"
              priority // improves LCP for above-the-fold images
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;