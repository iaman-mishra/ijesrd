import SectionHeader from "@/Components/Common/SectionHeader";
import { SpringUp } from "@/Components/Motion/AnimatedWrapper";
import { recentPapers } from "@/constants/data";
import { Box, Button } from "@mui/material";
import ResearchCard from "./ResearchCard";

const RecentResearches: React.FC = () => {
  return (
    <Box component={"section"} sx={style.section}>
      <SectionHeader
        title={"Latest Research Publications"}
        description={
          "Stay up to date with the newest research papers published by our scholars"
        }
      />

      <Box sx={style.grid}>
        {recentPapers.map((paper, index) => (
          <SpringUp key={index} delay={index * 0.2}>
            <ResearchCard {...paper} />
          </SpringUp>
        ))}
      </Box>

      <Box sx={style.buttonContainer}>
        <Button variant="text" size="medium">
          View All Articles
        </Button>
      </Box>
    </Box>
  );
};

const style = {
  section: {
    width: "100%",
    paddingX: "15px",
    paddingY: {
      xs: "40px",
      md: "60px",
      xl: "80px",
    },
    marginX: "auto",
    maxWidth: {
      md: "720px",
      lg: "992px",
      xl: "1140px",
    },
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "repeat(2, 1fr)",
    },
    gap: "1.5rem",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
} satisfies IStyle;

export default RecentResearches;
