import { Box, CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Box sx={style.gridItem}>
      <Card sx={style.card}>
        <CardContent sx={style.cardContent}>
          <Box sx={style.iconContainer}>{icon}</Box>
          <Typography variant="h4" sx={style.cardTitle} component={"h2"}>
            {title}
          </Typography>
          <Typography variant="subtitle2" component={"p"}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

const style: IStyle = {
  gridItem: {
    width: "100%",
  },
  card: {
    height: "100%",
    transition: "all 0.3s ease-in-out",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
    border: "1px solid #f0f0f0",
    "&:hover": {
      transform: "translateY(-8px)",
    },
  },
  cardContent: {
    padding: {
      xs: "1.5rem",
      md: "2rem",
    },
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  },
  iconContainer: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    bgcolor: "secondary.100",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "0.5rem",
    border: "2px solid",
    borderColor: "secondary.main",
  },
  cardTitle: {
    fontWeight: "500",
  },
};

export default FeatureCard;
