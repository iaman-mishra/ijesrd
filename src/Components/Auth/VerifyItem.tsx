import { Button, Stack, Typography } from "@mui/material";
import { PageTransition } from "../Motion/AnimatedWrapper";
import PulsatingIcon from "./PulsatingIcon";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import AuthFooterLink from "./AuthFooterLink";

interface VerifyItemProps {
  icon: React.ElementType;
  color: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  fotterText: string;
  fotterHref: string;
  fotterLinkText: string;
}

const VerifyItem: React.FC<VerifyItemProps> = ({
  icon,
  color,
  heading,
  description,
  buttonText,
  buttonHref,
  fotterText,
  fotterHref,
  fotterLinkText,
}) => {
  return (
    <PageTransition>
      <Stack spacing={4} sx={style.container}>
        <PulsatingIcon icon={icon} color={color} />
        <Stack spacing={1.5}>
          <Typography variant="h3" sx={style.heading}>
            {heading}
          </Typography>
          <Typography variant="body1" sx={style.description}>
            {description}
          </Typography>
        </Stack>

        <Button
          fullWidth
          variant="contained"
          size="large"
          component={Link}
          endIcon={<ArrowRight size={18} />}
          href={buttonHref}
        >
          {buttonText}
        </Button>

        <AuthFooterLink
          text={fotterText}
          linkText={fotterLinkText}
          href={fotterHref}
        />
      </Stack>
    </PageTransition>
  );
};

export default VerifyItem;

const style = {
  container: {
    alignItems: "center",
    textAlign: "center",
  },
  heading: {
    fontWeight: 600,
  },
  description: {
    color: "text.secondary",
    maxWidth: 380,
    mx: "auto",
    lineHeight: 1.6,
    whiteSpace: "pre-line",
  },
} satisfies IStyle;
