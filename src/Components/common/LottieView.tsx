"use client";
import { LottieComponentProps } from "lottie-react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface LottieViewProps {
  animationData: LottieComponentProps["animationData"];
  loop?: boolean;
}

const LottieView: React.FC<LottieViewProps> = ({
  animationData,
  loop = true,
}) => {
  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      className={"w-full h-full"}
    />
  );
};

export default LottieView;
