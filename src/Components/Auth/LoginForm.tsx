"use client";
import { Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import CustomInput from "../UI/CustomInput";
import PasswordInput from "../UI/PasswordInput";
import AuthHeader from "./AuthHeader";
import AuthSocialButtons from "./AuthSocialButtons";
import AuthFooterLink from "./AuthFooterLink";

const LoginForm: React.FC = () => {
  return (
    <Stack spacing={4}>
      <AuthHeader
        title="Welcome Back!"
        subtitle="Login to access your personalized dashboard."
      />

      <AuthSocialButtons onSocialClick={(provider) => console.log(provider)} />

      <Divider>
        <Typography variant="caption" color="text.secondary">
          OR LOGIN WITH EMAIL
        </Typography>
      </Divider>

      <Stack spacing={3} component="form">
        <Stack spacing={2}>
          <CustomInput type="email" label="Email" required />
          <PasswordInput label="Password" showForgot required />
        </Stack>
        <Button type="submit" variant="contained" size="large">
          Login
        </Button>
      </Stack>

      <AuthFooterLink
        text="Don't have an account?"
        linkText="Sign up"
        href="/signup"
      />
    </Stack>
  );
};

export default LoginForm;
