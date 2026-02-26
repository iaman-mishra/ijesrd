"use client";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

type BaseProps = Omit<TextFieldProps, "slotProps" | "type">;

interface PasswordInputProps extends BaseProps {
  showForgot?: boolean;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  showForgot = false,
  showPassword,
  setShowPassword,
  ...props
}) => {
  return (
    <Box>
      <TextField
        {...props}
        sx={style.field}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end" sx={style.icon}>
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
        fullWidth
        type={showPassword ? "text" : "password"}
      />
      {showForgot && (
        <Box
          sx={{
            textAlign: "right",
            mt: 1,
          }}
        >
          <Typography
            component={Link}
            href="/forgot-password"
            variant="body2"
            color="text.secondary"
            sx={{
              textDecoration: "none",
              "&:hover": { textDecoration: "underline", color: "text.primary" },
            }}
          >
            forgot password?
          </Typography>
        </Box>
      )}
    </Box>
  );
};

const style = {
  field: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px",
    },
    "& .MuiInputBase-input": {
      padding: "14px",
    },
  },
  icon: {
    color: "text.secondary",
  },
} satisfies IStyle;

export default PasswordInput;
