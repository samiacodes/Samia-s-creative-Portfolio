"use client";

import React from "react";

const MiniButton = ({
  onClick,
  children,
  className = "",
}: {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 rounded-full bg-black dark:bg-white dark:text-black text-white text-xs font-medium flex items-center gap-1 ${className}`}
  >
    {children}
  </button>
);

export default MiniButton;
