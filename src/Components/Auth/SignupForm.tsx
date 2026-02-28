"use client";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import CustomInput from "../UI/CustomInput";
import PasswordInput from "../UI/PasswordInput";
import AuthHeader from "./AuthHeader";
import AuthSocialButtons from "./AuthSocialButtons";
import AuthFooterLink from "./AuthFooterLink";
import { useForm } from "react-hook-form";
import { signupFormSchema } from "@/Schemas/forms.schemas";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignupMutation } from "@/services/api";
import { handleValidationError } from "@/utils/helper";
import { toast } from "sonner";
import VerificationEmailSent from "./VerificationEmailSent";

const SignupForm: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isSubmitted = searchParams.get("success") === "true";
  const userEmail = searchParams.get("email") || "";

  const [signup] = useSignupMutation();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  type SingupFormData = z.infer<typeof signupFormSchema>;

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SingupFormData>({
    resolver: zodResolver(signupFormSchema),
  });

  const handleSignup = async (data: SingupFormData) => {
    try {
      await signup(data).unwrap();
      toast.success("Account created successfully!");
      router.push(
        `${pathname}?success=true&email=${encodeURIComponent(data.email)}`,
      );
      reset();
    } catch (error: unknown) {
      handleValidationError<SingupFormData>(error, setError);
    }
  };

  if (isSubmitted) {
    return <VerificationEmailSent />;
  }

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

      <Stack spacing={3} component="form" onSubmit={handleSubmit(handleSignup)}>
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
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />

          <CustomInput
            required
            type={showPassword ? "text" : "password"}
            label="Confirm Password"
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            {...register("confirmPassword")}
          />

          <FormControl error={!!errors.terms}>
            <FormControlLabel
              control={<Checkbox {...register("terms")} />}
              label={
                <Typography variant="body2" color="text.secondary">
                  I agree to the{" "}
                  <Box component="span" color="primary.main">
                    terms and conditions
                  </Box>
                </Typography>
              }
            />
            {errors.terms && (
              <FormHelperText>{errors.terms.message}</FormHelperText>
            )}
          </FormControl>
        </Stack>

        <Button
          type="submit"
          variant="contained"
          size="large"
          loading={isSubmitting}
        >
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
