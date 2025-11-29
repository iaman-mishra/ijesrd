import Hero from "@/Components/Hero";
import { Box, Divider } from "@mui/material";
import React from "react";

const page: React.FC = () => {
  return <Box component={"main"}>
    <Hero />
    <Divider />
  </Box>;
};

export default page;
