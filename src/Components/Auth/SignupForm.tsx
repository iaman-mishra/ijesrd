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
import { useForm } from "react-hook-form";
import { signupFormSchema } from "@/Schemas/forms.schemas";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SignupForm: React.FC = () => {
  type SingupFormData = z.infer<typeof signupFormSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SingupFormData>({
    resolver: zodResolver(signupFormSchema),
  });

  const handleLogin = () => {};

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

      <Stack spacing={3} component="form" onSubmit={handleSubmit(handleLogin)}>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2}>
            <CustomInput
              required
              type="text"
              label="First Name"
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              {...register("firstName")}
            />
            <CustomInput
              required
              type="text"
              label="Last Name"
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              {...register("lastName")}
            />
          </Stack>

          <CustomInput
            required
            type="email"
            label="Email"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register("email")}
          />

          <PasswordInput
            required
            label="Password"
            error={!!errors.password}
            helperText={errors.password?.message}
            {...register("password")}
          />

          <PasswordInput
            required
            label="Confirm Password"
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            {...register("confirmPassword")}
          />

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
            {...register("terms")}
          />
          {errors.terms && (
            <Typography variant="body2" color="error.main">
              {errors.terms?.message}
            </Typography>
          )}
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
