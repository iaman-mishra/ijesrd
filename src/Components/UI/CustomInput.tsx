import { TextField, TextFieldProps } from "@mui/material";

const CustomInput = (props: TextFieldProps) => {
  return <TextField {...props} sx={style.field} />;
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
} satisfies IStyle;

export default CustomInput;
