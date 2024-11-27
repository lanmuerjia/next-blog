"use client";

import Lottie, { LottieOptions } from "lottie-react";

function LottieAnimation({ animationData, ...rest }: LottieOptions) {
  return <Lottie animationData={animationData} {...rest} />;
}

export default LottieAnimation;
