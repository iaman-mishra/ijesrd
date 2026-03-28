import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { ArrowRight } from "lucide-react";
import ArticleContent from "./ArticleContent";

const LatestArticles: React.FC = () => {
  return (
    <Box component={"section"} sx={style.section}>
      <Box sx={style.container}>
        <Box sx={style.header}>
          <Box sx={style.headingBox}>
            <Typography sx={style.heading}>{"Latest\nResearch"}</Typography>
            <Box sx={style.line} />
          </Box>
          <Button size="small" endIcon={<ArrowRight size={15} />}>
            View All Articles
          </Button>
        </Box>

        <ArticleContent />
      </Box>
    </Box>
  );
};

const style = {
  section: {
    paddingY: { xs: "64px", md: "96px" },
    backgroundColor: "background.paper",
  },
  container: {
    paddingX: { xs: "16px", sm: "24px" },
    display: "flex",
    flexDirection: "column",
    gap: { xs: "32px", md: "64px" },
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  headingBox: {
    display: "flex",
    flexDirection: "column",
    gap: { xs: "12px", md: "16px" },
  },
  heading: {
    fontWeight: 800,
    fontSize: { xs: "24px", md: "30px" },
    lineHeight: { xs: "32px", md: "36px" },
    letterSpacing: "-0.75px",
    whiteSpace: { xs: "pre-line", md: "normal" },
  },
  line: {
    width: "80px",
    height: "4px",
    backgroundColor: "primary.main",
  },
} satisfies IStyle;

export default LatestArticles;
