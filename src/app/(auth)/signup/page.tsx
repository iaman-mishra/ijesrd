"use client";

import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Link as MuiLink,
  Box,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Eye, EyeOff, Mail, Lock, User, UserPlus } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import CustomInput from "@/Components/UI/CustomInput";

const signupSchema = z
  .object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignupForm = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupForm) => {
    console.log("Signup Data:", data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" fontWeight="700" color="primary" gutterBottom>
          Create Account
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Join IJESRD today. Enter your details below.
        </Typography>
      </Box>

      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {/* <TextField
            fullWidth
            label="Full Name"
            placeholder="John Doe"
            {...register("fullName")}
            error={!!errors.fullName}
            helperText={errors.fullName?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <User size={20} color="gray" />
                </InputAdornment>
              ),
            }}
          /> */}

          <CustomInput
            fullWidth
            type="text"
            label="Email Address"
            placeholder="john@example.com"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            fullWidth
            label="Email Address"
            placeholder="john@example.com"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Mail size={20} color="gray" />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock size={20} color="gray" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            label="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="••••••••"
            {...register("confirmPassword")}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock size={20} color="gray" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            disabled={isSubmitting}
            startIcon={!isSubmitting && <UserPlus size={20} />}
            sx={{
              py: 1.5,
              fontSize: "1rem",
              borderRadius: "50px",
              boxShadow: "0 4px 14px 0 rgba(0,118,255,0.39)",
            }}
          >
            {isSubmitting ? "Creating Account..." : "Sign Up"}
          </Button>
        </Box>
      </Box>

      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          Already have an account?{" "}
          <MuiLink
            component={Link}
            href="/login"
            underline="hover"
            color="primary"
            sx={{ fontWeight: "bold" }}
          >
            Sign in
          </MuiLink>
        </Typography>
      </Box>
    </motion.div>
  );
}
