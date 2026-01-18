import { Box, Button, Chip, Typography } from "@mui/material";
import { Calendar, User, ArrowRight } from "lucide-react";
import React from "react";

interface ResearchCardProps {
  category: string;
  date: string;
  title: string;
  description: string;
  authors: string[];
}

const ResearchCard: React.FC<ResearchCardProps> = ({
  category,
  date,
  title,
  description,
  authors,
}) => {
  return (
    <Box sx={style.card}>
      <Box sx={style.cardHeader}>
        <Chip label={category} size="small" sx={style.chip} />
        <Box sx={style.dateContainer}>
          <Calendar size={16} />
          <Typography variant="caption">{date}</Typography>
        </Box>
      </Box>

      <Typography variant="h5" sx={style.title}>
        {title}
      </Typography>

      <Typography variant="body2" sx={style.description}>
        {description}
      </Typography>

      <Box sx={style.cardFooter}>
        <Box sx={style.author}>
          <User size={16} />
          <Typography variant="caption" sx={style.authorName}>
            {authors[0]} {authors.length > 1 && `+${authors.length - 1} others`}
          </Typography>
        </Box>

        <Button variant="text" endIcon={<ArrowRight size={16} />} size="small">
          Read Paper
        </Button>
      </Box>
    </Box>
  );
};

export default ResearchCard;

const style = {
  card: {
    backgroundColor: "background.paper",
    borderRadius: "16px",
    padding: "24px",
    border: "1px solid",
    borderColor: "divider",
    transition: "all 0.3s ease",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
    gap: "1rem",
    height: "100%",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      borderColor: "secondary.main",
    },
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chip: {
    color: "secondary.contrastText",
    fontWeight: 600,
    bgcolor: "secondary.main",
  },
  dateContainer: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  title: {
    fontWeight: 700,
  },
  description: {
    mb: "auto",
  },
  cardFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid ",
    borderColor: "divider",
    paddingTop: "16px",
    marginTop: "8px",
  },
  author: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "text.primary",
  },
  authorName: {
    fontWeight: 500,
  },
} satisfies IStyle;
