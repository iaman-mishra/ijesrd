import Hero from "@/Components/Hero";
import WhyChooseUs from "@/Components/WhyChooseUs";
import { Box, Divider } from "@mui/material";
import React from "react";

const page: React.FC = () => {
  return (
    <Box component={"main"}>
      <Hero />
      <Divider />
      <WhyChooseUs />
    </Box>
  );
};

export default page;
