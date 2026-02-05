import { InputAdornment, TextField, TextFieldProps } from "@mui/material";

type BaseProps = Omit<TextFieldProps, "slotProps">;

interface CustomInputProps extends BaseProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const CustomInput: React.FC<CustomInputProps> = ({
  startIcon,
  endIcon,
  ...props
}) => {
  return (
    <TextField
      {...props}
      sx={style.field}
      slotProps={{
        input: {
          startAdornment: startIcon ? (
            <InputAdornment position="start" sx={style.icon}>
              {startIcon}
            </InputAdornment>
          ) : undefined,

          endAdornment: endIcon ? (
            <InputAdornment position="end" sx={style.icon}>
              {endIcon}
            </InputAdornment>
          ) : undefined,
        },
      }}
      fullWidth
    />
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

export default CustomInput;
