import { contactInfo, footerUrls } from "@/constants/data";
import { Box, Typography, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import { ListReveal } from "../Motion/AnimatedWrapper";

const FooterLinks: React.FC = () => {
  return (
    <Grid container spacing={{ xs: "40px", md: "48px" }}>
      <Grid size={{ xs: 12, md: 3 }}>
        <Box sx={style.infoBox}>
          <Box>
            <Typography sx={style.title}>IJESRD</Typography>
            <Typography sx={style.caption}>ISSN: 2456-9283</Typography>
          </Box>
          <Typography sx={style.description}>
            Advancing science and technology through rigorous peer-reviewed
            research and global collaboration.
          </Typography>
        </Box>
      </Grid>

      {footerUrls.map((item) => (
        <Grid size={{ xs: 6, md: 3 }} key={item.title}>
          <Typography sx={style.ColumnHeading}>{item.title}</Typography>
          <Box sx={style.linkContainer}>
            {item.links.map((url, index) => (
              <ListReveal key={index} delay={index * 0.1}>
                <Link
                  key={index}
                  href={url.href}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Typography sx={style.link}>{url.label}</Typography>
                </Link>
              </ListReveal>
            ))}
          </Box>
        </Grid>
      ))}

      <Grid size={{ xs: 12, md: 3 }}>
        <Typography sx={style.ColumnHeading}>Contact Us</Typography>
        <Box sx={style.linkContainer}>
          {contactInfo.map((url, index) => (
            <ListReveal key={index} delay={index * 0.1}>
              <Link
                key={url.label}
                href={url.url}
                style={{ textDecoration: "none" }}
              >
                <Typography sx={style.link}>
                  {url.label}: {url.value}
                </Typography>
              </Link>
            </ListReveal>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

const style = {
  infoBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "24px",
  },
  title: {
    fontWeight: "800",
    color: "primary.main",
    fontSize: "24px",
    lineHeight: "32px",
  },
  caption: {
    fontSize: "12px",
    lineHeight: "20px",
    color: "text.secondary",
  },
  description: {
    fontSize: "12px",
    lineHeight: "20px",
    color: "text.secondary",
    textAlign: "justify",
  },
  ColumnHeading: {
    fontWeight: 800,
    fontSize: "11px",
    lineHeight: "16.5px",
    letterSpacing: "1.1px",
    textTransform: "uppercase",
    mb: "23px",
  },
  linkContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  link: {
    color: "text.secondary",
    fontSize: "13px",
    lineHeight: "19.5px",
    "&:hover": {
      color: "primary.main",
    },
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  contactIcons: {
    color: "var(--mui-palette-primary-main)",
    minWidth: "fit-content",
  },
  contactText: {
    color: "text.secondary",
    fontWeight: 500,
  },
} satisfies IStyle;

export default FooterLinks;
