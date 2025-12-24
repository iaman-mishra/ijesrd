import { Box, Typography } from "@mui/material";
import React from "react";

const SectionHeader: React.FC<ISectionHeader> = ({
  title,
  description,
  variant = "primary",
}) => {
  const isSecondary = variant === "secondary";

  return (
    <Box sx={style.header}>
      <Typography
        variant="h1"
        sx={{
          ...style.title,
          color: isSecondary
            ? "secondary.contrastText"
            : "text.primary",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          ...style.underline,
          bgcolor: isSecondary ? "secondary.main" : "primary.main",
        }}
      />
      {description && (
        <Typography
          variant="subtitle1"
          sx={{
            ...style.subtitle,
            color: isSecondary
              ? "secondary.contrastText"
              : "primary.text.primary",
          }}
          component="p"
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};

const style: IStyle = {
  header: {
    textAlign: "center",
  },
  title: {
    whiteSpace: "pre-line",
  },
  underline: {
    width: "80px",
    height: "5px",
    borderRadius: "1rem",
    marginX: "auto",
    marginTop: "1rem",
  },
  subtitle: {
    maxWidth: "600px",
    marginX: "auto",
  },
};

export default SectionHeader;
