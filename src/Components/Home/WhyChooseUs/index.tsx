"use client";
import React from "react";
import FeatureCard from "./FeatureCard";
import { Box } from "@mui/material";
import SectionHeader from "@/Components/Common/SectionHeader";
import { features } from "@/constants/data";

const WhyChooseUs: React.FC = () => {
  return (
    <Box component={"section"} sx={style.section}>
      <SectionHeader
        title={"Why Choose Us"}
        description={
          "Discover what makes us the preferred choice for researchers and academics worldwide"
        }
      />

      <Box sx={style.grid}>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={<feature.icon />}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </Box>
    </Box>
  );
};

const style: IStyle = {
  section: {
    width: "100%",
    paddingX: "15px",
    paddingY: {
      xs: "40px",
      md: "60px",
      xl: "80px",
    },
    marginX: "auto",
    maxWidth: {
      md: "720px",
      lg: "992px",
      xl: "1140px",
    },
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "repeat(2, 1fr)",
      lg: "repeat(3, 1fr)",
    },
    gap: "1.5rem",
  },
  icon: {
    fontSize: "2rem",
    color: "white",
  },
};

export default WhyChooseUs;
