"use client";
import { cn } from "@/lib/utils";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;

}) => {

 
  return (
    <div
      className={cn(
        "relative group row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition-all duration-300 dark:border-white/[0.2] dark:bg-black-100",
        className
      )}
      style={{
        //    generated the gradient color from here https://cssgradient.io/
        background: "#090817",
        backgroundColor:
          "linear-gradient(169deg,rgba(9, 8, 23, 1) 0%, rgba(232, 231, 248, 1) 35%, rgba(26, 42, 128, 1) 100%)",
      }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 z-0 rounded-xl border border-transparent transition-all duration-300 group-hover:border-sky-400 group-hover:shadow-[0_0_25px_4px_rgba(56,189,248,0.4)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {header}
        {icon && <div className="mb-2">{icon}</div>}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-lg font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};


