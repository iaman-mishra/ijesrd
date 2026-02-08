"use client";
import React from "react";
import { Button, Stack } from "@mui/material";
import { socialButtons } from "@/constants/data";

interface AuthSocialButtonsProps {
  onSocialClick: (provider: SocialProvider) => void;
}

const AuthSocialButtons: React.FC<AuthSocialButtonsProps> = ({
  onSocialClick,
}) => {
  return (
    <Stack spacing={2}>
      {socialButtons.map((item) => (
        <Button
          key={item.provider}
          variant="outlined"
          size="large"
          startIcon={<item.icon />}
          sx={style.socialButton}
          onClick={() => onSocialClick(item.provider as SocialProvider)}
        >
          {item.label}
        </Button>
      ))}
    </Stack>
  );
};

export default AuthSocialButtons;

const style = {
  socialButton: {
    borderColor: "divider",
    color: "text.primary",
  },
} satisfies IStyle;
