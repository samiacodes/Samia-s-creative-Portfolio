"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import MiniButton from "./MiniButton";

type ProjectCardProps = {
  title: string;
  subtitle: string;
  image: string;
  link: string;
  description: string[];
};

export const ProjectCard = ({
  title,
  subtitle,
  image,
  link,
  description,
}: ProjectCardProps) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => setShowDescription((prev) => !prev);

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[35rem] h-auto rounded-xl p-6 border">
        {/* Title */}
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>

        {/* Subtitle */}
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {subtitle}
        </CardItem>

        {/* Image */}
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            alt={`${title} thumbnail`}
            width={1000}
            height={1000}
            className="h-60 w-full object-left rounded-xl group-hover/card:shadow-xl"
            priority
          />
        </CardItem>

        {/* Animated Description */}
        <AnimatePresence>
          {showDescription && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden mt-6 text-sm text-neutral-600 dark:text-neutral-300 space-y-2"
            >
              {description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-10">
          {/* Visit Site */}
          <CardItem
            translateZ={20}
            as="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full text-xs font-normal dark:text-white"
          >
            Visit Site →
          </CardItem>

          {/* Toggle Description */}
          {/* <CardItem
            translateZ={20}
            as="button"
            onClick={toggleDescription}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold flex items-center gap-1"
          >
            {showDescription ? "Show less" : "Read more"}
            <motion.span
              animate={{ rotate: showDescription ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              ▼
            </motion.span>
          </CardItem> */}
          <MiniButton onClick={toggleDescription}>
            {showDescription ? "Show less" : "Read more"}
            <motion.span
              animate={{ rotate: showDescription ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              ▼
            </motion.span>
          </MiniButton>
        </div>
      </CardBody>
    </CardContainer>
  );
};
