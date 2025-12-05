import React from "react";
import dynamic from "next/dynamic";
import { Box, Divider } from "@mui/material";

import Hero from "@/Components/Home/Hero";

const WhyChooseUs = dynamic(() => import("@/Components/Home/WhyChooseUs"));
const HomeStats = dynamic(() => import("@/Components/Home/HomeStats"));
const UGCDetails = dynamic(() => import("@/Components/Home/UGCDetails"));
const PublishingSteps = dynamic(
  () => import("@/Components/Home/PublishingSteps")
);

const page: React.FC = () => {
  return (
    <Box component={"main"}>
      <Hero />
      <Divider />
      <WhyChooseUs />
      <HomeStats />
      <UGCDetails />
      <Divider />
      <PublishingSteps />
    </Box>
  );
};

export default page;
