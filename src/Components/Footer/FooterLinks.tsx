import { contactInfo, footerUrls } from "@/constants/data";
import { Box, Stack, Typography } from "@mui/material";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const FooterLinks: React.FC = () => {
  return (
    <Box sx={style.container}>
      <Box>
        <Stack spacing={3}>
          <Box>
            <Typography sx={style.title}>IJESRD</Typography>
            <Typography variant="caption" sx={style.caption}>
              ISSN: 2456-9283
            </Typography>
          </Box>
          <Typography sx={style.description}>
            International Journal of Engineering Science and Research
            Development is a peer-reviewed, open-access journal dedicated to
            publishing cutting-edge research.
          </Typography>
        </Stack>
      </Box>

      {footerUrls.map((item) => (
        <Box key={item.title}>
          <Typography sx={style.ColumnHeading}>{item.title}</Typography>
          <Stack spacing={1.5}>
            {item.links.map((url) => (
              <Link
                key={url.label}
                href={url.href}
                style={{ textDecoration: "none" }}
              >
                <Typography sx={style.link}>
                  <ArrowRight size={16} className="link-arrow-icon" />
                  {url.label}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Box>
      ))}

      <Box>
        <Typography sx={style.ColumnHeading}>Contact Us</Typography>
        <Stack spacing={2.5}>
          {contactInfo.map((item) => (
            <Link
              key={item.label}
              href={item.url}
              style={{ textDecoration: "none" }}
            >
              <Box sx={style.contactItem}>
                <item.icon size={18} style={style.contactIcons} />
                <Typography sx={style.contactText}>{item.value}</Typography>
              </Box>
            </Link>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

const style = {
  container: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", lg: "2fr 1fr 1fr 1.5fr" },
    gap: { xs: "3rem", lg: "3rem" },
  },
  title: {
    fontWeight: "800",
    color: "primary.main",
    fontSize: "1.5rem",
  },
  caption: {
    fontWeight: "800",
    color: "text.secondary",
  },
  description: {
    lineHeight: 1.8,
    color: "text.secondary",
    textAlign: "justify",
  },
  ColumnHeading: {
    fontWeight: 700,
    color: "text.secondary",
    fontSize: "1rem",
    mb: 3,
    position: "relative",
    display: "inline-block",
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: -8,
      width: "40px",
      height: "3px",
      borderRadius: "2px",
      background: "var(--mui-palette-primary-main)",
    },
  },
  link: {
    width: "fit-content",
    color: "text.secondary",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    transition: "all 0.3s ease",
    fontSize: "0.9rem",
    fontWeight: 500,
    "& .link-arrow-icon": {
      display: "none",
      transform: "translateX(-10px)",
      transition: "all 0.3s ease",
      color: "primary.main",
    },
    "&:hover": {
      color: "primary.main",
      paddingLeft: "5px",
      "& .link-arrow-icon": {
        display: "block",
        opacity: 1,
        transform: "translateX(0)",
      },
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
