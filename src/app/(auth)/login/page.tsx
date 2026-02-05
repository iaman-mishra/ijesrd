import LoginForm from "@/Components/Auth/LoginForm";
import CustomInput from "@/Components/UI/CustomInput";
import { Box, Stack, Typography } from "@mui/material";

import React from "react";

const Login = () => {
  return (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h3" fontWeight="700" color="primary">
          Welcome Back!
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Login to your account.
        </Typography>
      </Box>
      <LoginForm />
    </Stack>
  );
};

export default Login;
