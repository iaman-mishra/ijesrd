import { Box, Typography } from "@mui/material";
import React from "react";

interface WhyPublishCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const WhyPublishCard: React.FC<WhyPublishCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <Box sx={style.card}>
      <Box sx={style.icon}>{icon}</Box>

      <Typography sx={style.title}>{title}</Typography>

      <Typography sx={style.description}>{description}</Typography>
    </Box>
  );
};

const style = {
  card: {
    backgroundColor: "background.paper",
    padding: { xs: "25px", md: "32px" },
    borderRadius: "12px",
    border: "1px solid var(--mui-palette-divider)",
  },
  icon: {
    padding: { xs: "10px", md: "12px" },
    backgroundColor: "background.default",
    maxWidth: "fit-content",
    borderRadius: "8px",
    marginBottom: { xs: "16px", md: "24px" },
    boxShadow: "0px 1px 2px 0px #0000000D",
  },
  title: {
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "24px",
    marginBottom: { xs: "8px", md: "12px" },
  },
  description: {
    fontSize: "12px",
    lineHeight: "19.5px",
  },
};

export default WhyPublishCard;
