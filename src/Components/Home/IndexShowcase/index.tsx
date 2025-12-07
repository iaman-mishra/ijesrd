import React from "react";
import Image from "next/image";
import SectionHeader from "@/Components/common/SectionHeader";
import { Box } from "@mui/material";
import Marquee from "react-fast-marquee";
import AchadmiaEdu from "@/assets/index-platforms/achadmia-edu.webp";
import Crossref from "@/assets/index-platforms/crossrefe.png";
import GoogleScholar from "@/assets/index-platforms/google-scholar.webp";
import IssnLogo from "@/assets/index-platforms/issn_logo.webp";
import Issuu from "@/assets/index-platforms/issuu.webp";
import OpenAccess from "@/assets/index-platforms/open-access-logo.webp";
import RefSeek from "@/assets/index-platforms/ref-seek.png";
import ResearcherId from "@/assets/index-platforms/researcher-id.png";
import ResearchGate from "@/assets/index-platforms/researchgate.svg?url";
import RoadIssn from "@/assets/index-platforms/road-issn.webp";
import Scribd from "@/assets/index-platforms/scribd.gif";
import SemanticScholar from "@/assets/index-platforms/semantic-scholar.webp";

const IndexShowcase: React.FC = () => {
  const Logos = [
    {
      name: "Achadmia Edu",
      logo: AchadmiaEdu,
    },
    {
      name: "Crossref",
      logo: Crossref,
    },
    {
      name: "Google Scholar",
      logo: GoogleScholar,
    },
    {
      name: "ISSN Logo",
      logo: IssnLogo,
    },
    {
      name: "ISSUU",
      logo: Issuu,
    },
    {
      name: "Open Access",
      logo: OpenAccess,
    },
    {
      name: "RefSeek",
      logo: RefSeek,
    },
    {
      name: "ResearcherId",
      logo: ResearcherId,
    },
    {
      name: "ResearchGate",
      logo: ResearchGate,
    },
    {
      name: "RoadIssn",
      logo: RoadIssn,
    },
    {
      name: "Scribd",
      logo: Scribd,
    },
    {
      name: "SemanticScholar",
      logo: SemanticScholar,
    },
  ];
  
  return (
    <Box component={"section"} sx={style.section}>
      <SectionHeader
        title={"IJESRD Journals Indexing Platform"}
        description={"Major International Journals Indexing Platform"}
      />

      <Box>
        <Marquee gradient className="">
          {Logos.map((img) => (
            <Box
              sx={{
                minWidth: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                py: 4,
                borderRadius: "20px",
                border: "1px solid #fef3f3",
              }}
            >
              <Image
                src={img.logo}
                alt={img.name}
                width={140}
                height={60}
                className="object-contain"
              />
            </Box>
          ))}
        </Marquee>
      </Box>
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
    maxWidth: {
      md: "720px",
      lg: "992px",
      xl: "1140px",
    },
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  card: {},
};

export default IndexShowcase;
