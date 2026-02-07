import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import CustomInput from "../UI/CustomInput";
import PasswordInput from "../UI/PasswordInput";

const GoogleIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.52 12.29C23.52 11.43 23.47 10.74 23.33 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.95 21.1C22.22 19.01 23.52 15.92 23.52 12.29Z"
      fill="#4285F4"
    />
    <path
      d="M12 24C15.24 24 17.96 22.92 19.95 21.1L16.08 18.1C15 18.82 13.62 19.24 12 19.24C8.87 19.24 6.22 17.13 5.27 14.3H1.28V17.39C3.26 21.32 7.34 24 12 24Z"
      fill="#34A853"
    />
    <path
      d="M5.27 14.3C5.03 13.56 4.9 12.78 4.9 12C4.9 11.22 5.03 10.44 5.27 9.7V6.61H1.28C0.46 8.24 0 10.07 0 12C0 13.93 0.46 15.76 1.28 17.39L5.27 14.3Z"
      fill="#FBBC05"
    />
    <path
      d="M12 4.76C13.76 4.76 15.34 5.36 16.58 6.55L20.03 3.11C17.96 1.17 15.24 0 12 0C7.34 0 3.26 2.68 1.28 6.61L5.27 9.7C6.22 6.87 8.87 4.76 12 4.76Z"
      fill="#EA4335"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.4471 20.452H16.8927V14.8813C16.8927 13.5532 16.868 11.8447 15.0435 11.8447C13.1932 11.8447 12.9095 13.2899 12.9095 14.7853V20.452H9.35513V9.00693H12.7667V10.5701H12.8156C13.2902 9.67086 14.4504 8.72141 16.1802 8.72141C19.7797 8.72141 20.4471 11.0906 20.4471 14.1673V20.452ZM5.33785 7.44297C4.1969 7.44297 3.2736 6.51817 3.2736 5.37893C3.2736 4.23812 4.1969 3.31332 5.33785 3.31332C6.47723 3.31332 7.40209 4.23812 7.40209 5.37893C7.40209 6.51817 6.47723 7.44297 5.33785 7.44297ZM3.56075 20.452H7.11651V9.00693H3.56075V20.452Z"
      fill="#0077B5"
    />
  </svg>
);

const SignupForm: React.FC = () => {
  return (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h3" fontWeight="700" color="primary">
          Create Account
        </Typography>
        <Typography variant="body1" color="text.secondary" mt={1}>
          Join us and get started with your journey.
        </Typography>
      </Box>

      {/* Social Register */}
      <Stack spacing={2}>
        <Button
          variant="outlined"
          size="large"
          fullWidth
          startIcon={<GoogleIcon />}
          sx={{
            borderColor: "divider",
            color: "text.primary",
            textTransform: "none",
            fontSize: "1rem",
            py: 1.5,
            borderRadius: "12px",
            "&:hover": {
              borderColor: "primary.main",
              backgroundColor: "action.hover",
            },
          }}
        >
          Sign up with Google
        </Button>
        <Button
          variant="outlined"
          size="large"
          fullWidth
          startIcon={<LinkedInIcon />}
          sx={{
            borderColor: "divider",
            color: "text.primary",
            textTransform: "none",
            fontSize: "1rem",
            py: 1.5,
            borderRadius: "12px",
            "&:hover": {
              borderColor: "#0077B5",
              backgroundColor: "action.hover",
            },
          }}
        >
          Sign up with LinkedIn
        </Button>
      </Stack>

      <Divider>
        <Typography variant="caption" color="text.secondary">
          OR REGISTER WITH EMAIL
        </Typography>
      </Divider>

      {/* Email Form */}
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
                <Box
                  component="span"
                  color="primary.main"
                  sx={{ cursor: "pointer", fontWeight: 500 }}
                >
                  terms and conditions
                </Box>
              </Typography>
            }
          />
        </Stack>
        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          sx={{
            py: 1.5,
            borderRadius: "12px",
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: 600,
          }}
        >
          Create Account
        </Button>
      </Stack>

      {/* Footer Link */}
      <Box textAlign="center">
        <Typography variant="body2" color="text.secondary">
          Already have an account?{" "}
          <Link
            href="/login"
            style={{ textDecoration: "none", fontWeight: 600 }}
          >
            <Box component="span" color="primary.main">
              Login
            </Box>
          </Link>
        </Typography>
      </Box>
    </Stack>
  );
};

export default SignupForm;
