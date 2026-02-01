import { Box, Typography } from "@mui/material";
import FacebookIcon from "@/assets/svg/facebook.svg";
import LinkedinIcon from "@/assets/svg/linkedin.svg";
import TwitterIcon from "@/assets/svg/twitter.svg";
import React from "react";
import { socialLinks } from "@/constants/data";
const Header: React.FC = () => {
  return (
    <Box component={"header"} sx={style.section}>
      <Box sx={style.containerLeft}>
        <Box>
          <Typography>
            International journal of engineering & science <br /> research and
            development.
          </Typography>
          <Typography variant="subtitle2">
            An ISO Certified Peer-Reviewed Journal
          </Typography>
        </Box>
      </Box>
      <Box sx={style.containerRight}>
        <Typography>ISSN: 2456-9283</Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          {socialLinks.map((item) => (
            <item.icon key={item.label} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const style = {
  section: {
    display: { xs: "none", md: "flex" },
    width: "100%",
    maxWidth: "1140px",
    padding: "30px 15px",
    margin: "0 auto",
  },
  containerLeft: { flex: 1, display: "flex", gap: 2 },
  containerRight: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    justifyContent: "center",
    gap: 1,
  },
} satisfies IStyle;

export default Header;
