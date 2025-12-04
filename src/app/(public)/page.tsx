import React from "react";
import dynamic from "next/dynamic";
import { Box, Divider } from "@mui/material";

import Hero from "@/Components/Hero";

const WhyChooseUs = dynamic(() => import('@/Components/WhyChooseUs'))
const HomeStats = dynamic(() => import('@/Components/HomeStats'))
const UGCDetails = dynamic(() => import('@/Components/UGCDetails'))
const PublishingSteps = dynamic(() => import('@/Components/PublishingSteps'))

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
      {/* this is comment */}
    </Box>
  );
};

export default page;
