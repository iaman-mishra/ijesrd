import React from "react";
import Image from "next/image";
import SectionHeader from "@/Components/common/SectionHeader";
import { Box } from "@mui/material";
import Marquee from "react-fast-marquee";
import { IndexImages } from "@/constants/data";

const IndexShowcase: React.FC = () => {
  return (
    <Box component={"section"} sx={style.section}>
      <SectionHeader
        title={"IJESRD Journals Indexing Platform"}
        description={"Major International Journals Indexing Platform"}
      />

      <Marquee gradient gradientWidth={80} pauseOnHover>
        {IndexImages.slice(0, 6).map((img) => (
          <Box sx={style.card}>
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

      <Marquee gradient direction="right" gradientWidth={80} pauseOnHover>
        {IndexImages.slice(6).map((img) => (
          <Box sx={style.card}>
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
    minWidth: "200px",
    marginX: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    py: 2,
    borderRadius: "20px",
    border: "1px solid #0000000d",
  },
};

export default IndexShowcase;
