import { TextField, TextFieldProps } from "@mui/material";

const CustomInput = (props: TextFieldProps) => {
  return <TextField {...props} sx={{ borderRadius: "50px" }} />;
};

export default CustomInput;
