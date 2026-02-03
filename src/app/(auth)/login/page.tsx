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
  Divider,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Eye, EyeOff, Mail, Lock, LogIn } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    console.log("Login Data:", data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // Here you would typically call your auth provider
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" fontWeight="700" color="primary" gutterBottom>
          Welcome Back
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Please enter your details to sign in.
        </Typography>
      </Box>

      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
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

          <Box>
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
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
              <MuiLink
                component={Link}
                href="/forgot-password"
                underline="hover"
                variant="body2"
                color="secondary"
                sx={{ fontWeight: 500 }}
              >
                Forgot Password?
              </MuiLink>
            </Box>
          </Box>

          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            disabled={isSubmitting}
            startIcon={!isSubmitting && <LogIn size={20} />}
            sx={{
              py: 1.5,
              fontSize: "1rem",
              borderRadius: "50px",
              boxShadow: "0 4px 14px 0 rgba(0,118,255,0.39)",
            }}
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </Button>
        </Box>
      </Box>

      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          Don't have an account?{" "}
          <MuiLink
            component={Link}
            href="/signup"
            underline="hover"
            color="primary"
            sx={{ fontWeight: "bold" }}
          >
            Sign up now
          </MuiLink>
        </Typography>
      </Box>
    </motion.div>
  );
}
