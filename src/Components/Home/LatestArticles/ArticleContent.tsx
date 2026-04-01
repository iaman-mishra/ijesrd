"use client";
import { latestArticles } from "@/constants/data";
import { Box } from "@mui/material";
import React from "react";
import ArticleCard from "./ArticleCard";
import { SpringUp } from "@/Components/Motion/AnimatedWrapper";

const ArticleContent: React.FC = () => {
  return (
    <Box sx={style.content}>
      {latestArticles.map((paper, index) => (
        <SpringUp key={index} delay={index * 0.2}>
          <ArticleCard
            key={paper.id}
            category={paper.category}
            title={paper.title}
            authors={paper.authors}
            doi={paper.doi}
            onView={() => console.log(paper.id)}
          />
        </SpringUp>
      ))}
    </Box>
  );
};

const style = {
  content: {
    display: "grid",
    flexWrap: "wrap",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr 1fr",
      md: "repeat(3, 1fr)",
    },
    gap: { xs: "16px", md: "40px" },
    overflow: "hidden",
  },
} satisfies IStyle;

export default ArticleContent;
