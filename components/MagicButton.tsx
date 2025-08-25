
"use client"
import React from "react";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
// const MagicButton = ({
//   title,
//   icon,
//   position,
//   handleClick,
//   otherClasses,
// }: {
//   title: string;
//   icon: React.ReactNode;
//   position: string;
//   handleClick?: () => void;
//   otherClasses?: string;
// }) => {
//   return (
//     <button
//       className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
//       onClick={handleClick}
//     >
//       <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

//       {/* remove px-3 py-1, add px-5 gap-2 */}
//       <span
//         className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
//              bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
//       >
//         {position === "left" && icon}
//         {title}
//         {position === "right" && icon}
//       </span>
//     </button>
//   );
// };
const MagicButton = ({
  title,
  icon,
  position = "left",
  handleClick,
  otherClasses = "",
  as = "button",
  href,
  download,
}: {
  title: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
  as?: "button" | "a";
  href?: string;
  download?: boolean;
}) => {
  const sharedStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white bg-slate-950 backdrop-blur-3xl";
  const outerStyles =
    "relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none";

  const inner = (
    <>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className={`${sharedStyles} ${otherClasses}`}>
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </>
  );

  if (as === "a" && href) {
    return (
      <a href={href} download={download} className={outerStyles}>
        {inner}
      </a>
    );
  }

  return (
    <button onClick={handleClick} className={outerStyles}>
      {inner}
    </button>
  );
};


export default MagicButton;