"use client";
import { Skeleton } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
import HeroImage from "@/Lottie/StudentsLearning.json";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => <Skeleton variant="rectangular" sx={style.skelton} />,
});

const HeroLottie: React.FC = () => {
  return (
    <Lottie
      animationData={HeroImage}
      loop={true}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

const style: IStyle = {
  skelton: {
    width: "100%",
    height: "100%",
    borderRadius: "1rem",
    minHeight: {
      xs: "233.26px",
      md: "487.77px",
      lg: "auto",
    },
  },
};

export default HeroLottie;
