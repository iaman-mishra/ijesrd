import { Box, Stack } from "@mui/material";
import React from "react";
import CustomInput from "../UI/CustomInput";
import { Eye, EyeOffIcon, Lock, Mail } from "lucide-react";

const LoginForm: React.FC = () => {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <CustomInput required type="text" label="First Name" />
        <CustomInput required type="text" label="Last Name" />
      </Stack>
      <CustomInput required type="email" label="Email" />
      <CustomInput required type="password" label="Password" />
    </Stack>
  );
};

export default LoginForm;
