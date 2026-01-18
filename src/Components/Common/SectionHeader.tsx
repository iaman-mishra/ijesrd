import { Box, Typography } from "@mui/material";
import React from "react";
import { FadeUp, BlurIn, ScaleX } from "../Motion/AnimatedWrapper";

const SectionHeader: React.FC<ISectionHeader> = ({
  title,
  description,
  variant = "primary",
}) => {
  const isSecondary = variant === "secondary";

  return (
    <Box sx={style.header}>
      <BlurIn>
        <Typography
          variant="h1"
          sx={{
            ...style.title,
            color: isSecondary ? "secondary.contrastText" : "text.primary",
          }}
        >
          {title}
        </Typography>
      </BlurIn>

      <ScaleX delay={0.2}>
        <Box
          sx={{
            ...style.underline,
            bgcolor: isSecondary ? "secondary.main" : "primary.main",
          }}
        />
      </ScaleX>
      {description && (
        <FadeUp delay={0.4}>
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
        </FadeUp>
      )}
    </Box>
  );
};

const style = {
  header: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  title: {
    whiteSpace: "pre-line",
  },
  underline: {
    width: "80px",
    height: "5px",
    borderRadius: "1rem",
    marginX: "auto",
  },
  subtitle: {
    maxWidth: "600px",
    marginX: "auto",
  },
} satisfies IStyle;

export default SectionHeader;
