"use client";

import React from "react";
import Lottie, { LottieComponentProps } from "lottie-react";

interface LottiePlayerProps extends Omit<LottieComponentProps, "animationData"> {
  animationData: object;
  className?: string;
}

/**
 * Modern Lottie animation player component using lottie-react
 * 
 * @example
 * ```tsx
 * import animationData from '@/public/animations/my-animation.json';
 * 
 * <LottiePlayer 
 *   animationData={animationData}
 *   loop={true}
 *   autoplay={true}
 *   className="w-64 h-64"
 * />
 * ```
 */
export const LottiePlayer: React.FC<LottiePlayerProps> = ({
  animationData,
  className = "",
  loop = true,
  autoplay = true,
  ...props
}) => {
  return (
    <div className={className}>
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        {...props}
      />
    </div>
  );
};

export default LottiePlayer;
