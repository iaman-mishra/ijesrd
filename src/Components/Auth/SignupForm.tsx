"use client";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CustomInput from "../UI/CustomInput";
import PasswordInput from "../UI/PasswordInput";
import AuthHeader from "./AuthHeader";
import AuthSocialButtons from "./AuthSocialButtons";
import AuthFooterLink from "./AuthFooterLink";

const SignupForm: React.FC = () => {
  return (
    <Stack spacing={4}>
      <AuthHeader
        title="Create Account"
        subtitle="Join us and get started with your journey."
      />

      <AuthSocialButtons onSocialClick={(provider) => console.log(provider)} />

      <Divider>
        <Typography variant="caption" color="text.secondary">
          OR REGISTER WITH EMAIL
        </Typography>
      </Divider>

      <Stack spacing={3} component="form">
        <Stack spacing={2}>
          <Stack direction="row" spacing={2}>
            <CustomInput required type="text" label="First Name" />
            <CustomInput required type="text" label="Last Name" />
          </Stack>

          <CustomInput required type="email" label="Email" />

          <PasswordInput label="Password" required />

          <PasswordInput label="Confirm Password" required />

          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography variant="body2" color="text.secondary">
                I agree to the{" "}
                <Box component="span" color="primary.main">
                  terms and conditions
                </Box>
              </Typography>
            }
          />
        </Stack>

        <Button type="submit" variant="contained" size="large">
          Create Account
        </Button>
      </Stack>

      <AuthFooterLink
        text="Already have an account?"
        linkText="Login"
        href="/login"
      />
    </Stack>
  );
};

export default SignupForm;
