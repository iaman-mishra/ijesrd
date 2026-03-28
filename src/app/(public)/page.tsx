import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";

// Sections
import Hero from "@/Components/Home/Hero";
const HomeStats = dynamic(() => import("@/Components/Home/HomeStats"));
const LatestArticles = dynamic(
  () => import("@/Components/Home/LatestArticles"),
);
const WhyPublishWithUS = dynamic(
  () => import("@/Components/Home/WhyPublishWithUS"),
);

const Home: React.FC = () => {
  return (
    <Box component={"main"}>
      <Hero />
      <HomeStats />
      <LatestArticles />
      <WhyPublishWithUS />
    </Box>
  );
};

export default Home;
