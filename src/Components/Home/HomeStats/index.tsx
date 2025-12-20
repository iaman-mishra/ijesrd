import React from "react";
import { Box, Typography } from "@mui/material";
import SectionHeader from "@/Components/Common/SectionHeader";
import { statsData } from "@/constants/data";
import AnimatedCounter from "@/Components/Motion/AnimatedCounter";
const HomeStats: React.FC = () => {
  return (
    <Box component={"section"} sx={style.section}>
      <Box sx={style.container}>
        <SectionHeader variant="secondary" title={"Latest Insights"} />

        <Box sx={style.grid}>
          {statsData.map((stat, index) => (
            <Box key={index} sx={style.statCard}>
              <Typography variant="h2" sx={style.number} component={"p"}>
                <AnimatedCounter value={stat.number} />
                {stat.icon}
              </Typography>
              <Typography variant="h5" sx={style.label} component={"p"}>
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const style: IStyle = {
  section: {
    bgcolor: "primary.main",
    width: "100%",
    paddingY: {
      xs: "40px",
      md: "60px",
      xl: "80px",
    },
  },
  container: {
    width: "100%",
    paddingX: "15px",
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
      lg: "repeat(3, 1fr)",
    },
    gap: "2rem",
  },
  statCard: {
    textAlign: "center",
    padding: {
      xs: "1.5rem",
      md: "2rem",
    },
    borderRadius: "12px",
    // bgcolor: "bg.main10",
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease-in-out",
    border: "1px solid",
    borderColor: "bg.main20",
    "&:hover": {
      transform: "translateY(-8px)",
      // bgcolor: "bg.main20",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
    },
  },
  number: {
    color: "text.secondary",
    fontWeight: "600",
    marginBottom: "0.5rem",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    gap: "0.25rem",
  },
  label: {
    fontWeight: "400",
    color: "text.secondary",
  },
};

export default HomeStats;
