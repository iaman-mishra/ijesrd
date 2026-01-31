import { Box, Link, Stack, Typography } from "@mui/material";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const FooterLinks: React.FC = () => {
  return (
    <Box sx={style.container}>
      {/* About Section */}
      <Box sx={style.column}>
        <Stack spacing={2}>
          <Box>
            <Typography variant="h5" color="primary">
              IJESRD
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ISSN: 2456-9283
            </Typography>
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={style.description}
          >
            International Journal of Engineering Science and Research
            Development
          </Typography>
        </Stack>
      </Box>

      {/* Quick Links */}
      <Box sx={style.column}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Quick Links
        </Typography>
        <Stack spacing={1}>
          {["Home", "About Us", "Editorial Board", "Archives"].map((text) => (
            <Link
              key={text}
              href="#"
              underline="hover"
              color="text.secondary"
              variant="body2"
            >
              {text}
            </Link>
          ))}
        </Stack>
      </Box>

      {/* For Authors */}
      <Box sx={style.column}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          For Authors
        </Typography>
        <Stack spacing={1}>
          {[
            "Submit Paper",
            "Author Guidelines",
            "Publication Charges",
            "Indexing",
          ].map((text) => (
            <Link
              key={text}
              href="#"
              underline="hover"
              color="text.secondary"
              variant="body2"
            >
              {text}
            </Link>
          ))}
        </Stack>
      </Box>

      {/* Contact Info */}
      <Box sx={style.column}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Contact Us
        </Typography>
        <Stack spacing={2}>
          <Box sx={style.contactItem}>
            <MapPin size={20} style={{ flexShrink: 0 }} />
            <Typography variant="body2" color="text.secondary">
              India
            </Typography>
          </Box>
          <Box sx={style.contactItem}>
            <Mail size={20} style={{ flexShrink: 0 }} />
            <Link
              href="mailto:editor.ijesrd@gmail.com"
              underline="hover"
              color="text.secondary"
              variant="body2"
            >
              editor.ijesrd@gmail.com
            </Link>
          </Box>
          <Box sx={style.contactItem}>
            <Phone size={20} style={{ flexShrink: 0 }} />
            <Typography variant="body2" color="text.secondary">
              +91 XXXXXXXXXX
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

const style = {
  container: {
    paddingY: "3rem",
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "2fr 1fr 1fr 2fr" },
    gap: "2rem",
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  description: {
    lineHeight: 1.8,
    textAlign: "justify",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    color: "text.secondary",
  },
} satisfies IStyle;

export default FooterLinks;
