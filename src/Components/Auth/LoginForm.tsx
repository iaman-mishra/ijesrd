import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import CustomInput from "../UI/CustomInput";
import PasswordInput from "../UI/PasswordInput";

const LoginForm: React.FC = () => {
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
      <Stack spacing={2}>
        <CustomInput required type="email" label="Email" />
        <PasswordInput label="Password" required />
      </Stack>
      <Button type="submit">Login</Button>
    </Stack>
  );
};

export default LoginForm;
