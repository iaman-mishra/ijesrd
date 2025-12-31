import React from "react";
import Image from "next/image";
import SectionHeader from "@/Components/Common/SectionHeader";
import { Box } from "@mui/material";
import Marquee from "react-fast-marquee";
import { IndexImages } from "@/constants/data";
import { FadeUp } from "../../Motion/AnimatedWrapper";

const IndexShowcase: React.FC = () => {
  return (
    <Box component={"section"} sx={style.section}>
      <SectionHeader
        title={"IJESRD Journals Indexing Platform"}
        description={"Major International Journals Indexing Platform"}
      />

      <FadeUp delay={0.2}>
        <Marquee
          gradient
          gradientWidth={80}
          pauseOnHover
          gradientColor="var(--mui-palette-background-default)"
        >
          {IndexImages.slice(0, 6).map((img) => (
            <Box sx={style.card} key={img.name}>
              <Image
                src={img.logo}
                alt={img.name}
                height={40}
                width={80}
                objectFit="cover"
              />
            </Box>
          ))}
        </Marquee>
      </FadeUp>

      <FadeUp delay={0.4}>
        <Marquee
          gradient
          direction="right"
          gradientWidth={80}
          pauseOnHover
          gradientColor="var(--mui-palette-background-default)"
        >
          {IndexImages.slice(6).map((img) => (
            <Box sx={style.card} key={img.name}>
              <Image
                src={img.logo}
                alt={img.name}
                height={40}
                width={80}
                objectFit="cover"
              />
            </Box>
          ))}
        </Marquee>
      </FadeUp>
    </Box>
  );
};

const style: IStyle = {
  section: {
    width: "100%",
    paddingX: "15px",
    paddingY: {
      xs: "40px",
      md: "60px",
      xl: "80px",
    },
    marginX: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  card: {
    minWidth: {
      xs: "150px",
      md: "180px",
      lg: "200px",
    },
    marginX: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    py: 2,
    borderRadius: "16px",
    transition: "all 0.3s ease-in-out",
    backgroundColor: "background.paper",
    border: "1px solid",
    borderColor: "divider",
    cursor: "pointer",
    "&:hover": {
      borderColor: "secondary.main",
    },
  },
};

export default IndexShowcase;
