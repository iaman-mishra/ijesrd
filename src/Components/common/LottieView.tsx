"use client";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";
import Lottie, { LottieComponentProps } from "lottie-react";

interface LottieViewProps {
  animationData: LottieComponentProps["animationData"];
  loop?: boolean;
  style?: SxProps<Theme>;
}

const LottieView: React.FC<LottieViewProps> = ({
  animationData,
  loop = true,
  style,
}) => {
  return (
    <Box sx={style}>
      <Lottie
        animationData={animationData}
        loop={loop}
        className={"w-full h-full"}
      />
    </Box>
  );
};

export default LottieView;
