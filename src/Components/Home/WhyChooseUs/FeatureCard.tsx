"use client";
import { Box, Typography } from "@mui/material";
import React from "react";

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Box sx={style.card}>
      <Box sx={style.iconContainer}>{icon}</Box>
      <Typography variant="h4" sx={style.cardTitle} component={"h2"}>
        {title}
      </Typography>
      <Typography variant="subtitle2" component={"p"}>
        {description}
      </Typography>
    </Box>
  );
};

const style: IStyle = {
  card: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    flexDirection: "column",
    textAlign: "center",
    height: "100%",
    borderRadius: "16px",
    border: "1px solid",
    borderColor: "divider",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
    transition: "all 300ms ease-in-out",
    backgroundColor: "background.paper",
    padding: {
      xs: "1.5rem",
      md: "2rem",
    },
    "&:hover": {
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      borderColor: "secondary.main",
    },
  },
  iconContainer: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    bgcolor: "secondary.light",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "0.5rem",
    border: "2px solid",
    borderColor: "secondary.main",
  },
  cardTitle: {
    fontWeight: "600",
  },
};

export default FeatureCard;
