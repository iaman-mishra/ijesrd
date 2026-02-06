import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CustomInput from "../UI/CustomInput";
import PasswordInput from "../UI/PasswordInput";
import CustomButton from "../UI/CustomButton";

const SignupForm: React.FC = () => {
  return (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h3" fontWeight="700" color="primary">
          Create Account
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Join us and get started.
        </Typography>
      </Box>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <CustomInput required type="text" label="First Name" />
          <CustomInput required type="text" label="Last Name" />
        </Stack>
        <CustomInput required type="email" label="Email" />
        <PasswordInput label="Password" required />
        <PasswordInput label="Confirm Password" required showForgot />
        <FormControlLabel
          control={<Checkbox />}
          label="I agree to the terms and conditions"
        />
      </Stack>

      <CustomButton type="submit">Login</CustomButton>
    </Stack>
  );
};

export default SignupForm;
