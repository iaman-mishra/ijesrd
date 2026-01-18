import { Box, Button, InputBase, SxProps, Typography } from "@mui/material";
import { Mail, Send } from "lucide-react";
import React from "react";
import NewsLetterForm from "./NewsLetterForm";

const NewsLetter: React.FC = () => {
  return (
    <Box sx={style.section}>
      <Box sx={style.content}>
        <Typography variant="h4" sx={style.title}>
          Subscribe to our Newsletter
        </Typography>
        <Typography sx={style.description}>
          Get the latest research updates and calls for papers delivered to your
          inbox.
        </Typography>
      </Box>

      <Box sx={style.formContent}>
        <NewsLetterForm />
      </Box>
    </Box>
  );
};

const style = {
  section: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    gap: { xs: "2rem", md: "4rem" },
    padding: { xs: "2rem", md: "3rem" },
    borderRadius: "2rem",
    width: "100%",
    background:
      "linear-gradient(135deg, var(--mui-palette-primary-main) 0%, var(--mui-palette-primary-dark) 100%)",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    flex: 1,
    textAlign: { xs: "center", md: "start" },
    color: "primary.contrastText",
  },
  title: { fontWeight: 700 },
  description: {
    opacity: 0.9,
    maxWidth: { md: "80%" },
  },
  formContent: {
    flex: 1,
    display: "flex",
    justifyContent: { xs: "center", md: "flex-end" },
    width: "100%",
    maxWidth: { md: "500px" },
  },
} satisfies IStyle;

export default NewsLetter;
