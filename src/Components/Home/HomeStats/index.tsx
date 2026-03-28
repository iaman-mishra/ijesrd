import AnimatedCounter from "@/Components/Motion/AnimatedCounter";
import { statsData } from "@/constants/data";
import { Box, Typography } from "@mui/material";
import React from "react";

const HomeStats: React.FC = () => {
  return (
    <Box component={"section"} sx={style.section}>
      {statsData.map((item, index) => (
        <Box key={index} sx={style.gridItem}>
          <Typography sx={style.number}>
            <AnimatedCounter value={item.number} /> {"" + item.icon}
          </Typography>
          <Typography sx={style.label}>{item.label}</Typography>
        </Box>
      ))}
    </Box>
  );
};

const style = {
  section: {
    bgcolor: "background.default",
    paddingX: { xs: "16px", sm: "24px" },
    paddingY: { xs: "40px", md: "48px" },
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr 1fr",
      md: "repeat(4, 1fr)",
    },
    gap: "32px",
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    textAlign: "center",
  },
  number: {
    fontSize: { xs: "30px", md: "36px" },
    lineHeight: { xs: "36px", md: "40px" },
    fontWeight: 800,
    color: "primary.main",
  },
  label: {
    textTransform: "uppercase",
    fontSize: { xs: "9px", md: "12px" },
    fontWeight: 700,
    letterSpacing: "1.2px",
    lineHeight: { xs: "13.5px", md: "16px" },
    color: "text.secondary",
  },
} satisfies IStyle;

export default HomeStats;
