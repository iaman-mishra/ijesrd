"use client";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

type BaseProps = Omit<TextFieldProps, "slotProps" | "type">;

interface PasswordInputProps extends BaseProps {
  showForgot?: boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  showForgot = false,
  ...props
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <TextField
        {...props}
        sx={style.field}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end" sx={style.icon}>
                <IconButton onClick={() => setVisible(!visible)}>
                  {visible ? <EyeOff size={20} /> : <Eye size={20} />}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
        fullWidth
        type={visible ? "text" : "password"}
      />
      {showForgot && (
        <Box textAlign="right">
          <Link href="/forgot-password">Forgot password?</Link>
        </Box>
      )}
    </>
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
