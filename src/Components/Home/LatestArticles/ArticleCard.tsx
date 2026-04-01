"use client";
import { Box, Button, Chip, Divider, Typography } from "@mui/material";
import { Link as LinkIcon } from "lucide-react";
import React from "react";

interface ArticleCardProps {
  category: string;
  title: string;
  authors: string;
  doi: string;
  onView?: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  category,
  title,
  authors,
  doi,
  onView,
}) => {
  return (
    <Box sx={style.container}>
      <Chip label={category} sx={style.chip} />

      <Box sx={style.content}>
        <Typography sx={style.heading}>{title}</Typography>
        <Typography sx={style.authors}>{authors}</Typography>
      </Box>

      <Divider />

      <Box sx={style.footer}>
        <Typography sx={style.doi}>DOI: {doi}</Typography>

        <Button size="small" endIcon={<LinkIcon size={15} />} onClick={onView}>
          VIEW ARTICLE
        </Button>
      </Box>
    </Box>
  );
};

const style = {
  container: {
    padding: { xs: "24px", md: "32px" },
    backgroundColor: "background.default",
    borderRadius: "8px",
    boxShadow: "0px 12px 32px 0px rgba(0, 26, 64, 0.06)",
    minWidth: 0,
    display: "flex",
    height: "100%",
    flexDirection: "column",
  },
  chip: {
    backgroundColor: "secondary.light",
    color: "secondary.contrastText",
    borderRadius: "4px",
    fontSize: { xs: "8px", md: "9px" },
    lineHeight: "13.5px",
    fontWeight: 800,
    textTransform: "uppercase",
    marginBottom: { xs: "10px", md: "24px" },
    maxWidth: "fit-content",
    letterSpacing: "0.9px",
  },
  heading: {
    fontWeight: 700,
    fontSize: { xs: "18px", md: "20px" },
    lineHeight: { xs: "24.75px", md: "27.5px" },
    marginBottom: { xs: "10px", md: "16px" },
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  authors: {
    fontSize: { xs: "12px", md: "14px" },
    lineHeight: { xs: "16px", md: "20px" },
    marginBottom: { xs: "26px", md: "32px" },
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  footer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: { xs: "20px", md: "26px" },
  },
  doi: {
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "16px",
    color: "text.secondary",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  content: {
    flexGrow: 1,
  },
} satisfies IStyle;

export default ArticleCard;
