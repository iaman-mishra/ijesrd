import { Box, Typography } from "@mui/material";
import React from "react";
import WhyPublishCard from "./WhyPublishCard";
import { whyPublishData } from "@/constants/data";
import { FadeUp, SpringUp } from "@/Components/Motion/AnimatedWrapper";

const WhyPublishWithUS: React.FC = () => {
  return (
    <Box component={"section"} sx={style.section}>
      <Box sx={style.container}>
        <Box sx={style.header}>
          <FadeUp>
            <Typography sx={style.sectionTitle}>
              Why Publish With Us?
            </Typography>
          </FadeUp>
          <FadeUp delay={0.2}>
            <Typography sx={style.sectionDescription}>
              Join a community of elite researchers and benefit from a platform
              designed to amplify your intellectual contribution.
            </Typography>
          </FadeUp>
        </Box>
        <Box sx={style.content}>
          {whyPublishData.map((item, index) => (
            <SpringUp key={index} delay={index * 0.2}>
              <WhyPublishCard
                key={index}
                title={item.title}
                description={item.description}
                icon={<item.icon color="var(--mui-palette-primary-light)" />}
              />
            </SpringUp>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const style = {
  section: { paddingY: { xs: "64px", md: "96px" } },
  container: {
    paddingX: { xs: "16px", sm: "24px" },
    display: "flex",
    flexDirection: "column",
    gap: { xs: "48px", md: "64px" },
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    maxWidth: "649px",
    textAlign: "center",
    marginX: "auto",
  },
  sectionTitle: {
    fontWeight: 800,
    fontSize: { xs: "30px", md: "36px" },
    lineHeight: { xs: "36px", md: "40px" },
  },
  sectionDescription: {
    fontSize: { xs: "14px", md: "16px" },
    lineHeight: { xs: "20px", md: "24px" },
    whiteSpace: "pre-line",
    color: "text.secondary",
  },
  content: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr 1fr",
      md: "repeat(4, 1fr)",
    },
    gap: { xs: "16px", md: "24px" },
  },
} satisfies IStyle;

export default WhyPublishWithUS;
