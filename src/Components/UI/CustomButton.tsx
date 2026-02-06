import { Button, ButtonProps } from "@mui/material";
import React from "react";

type BaseProps = ButtonProps;

const CustomButton: React.FC<BaseProps> = ({
  size = "large",
  variant = "contained",
  ...props
}) => {
  return <Button size={size} variant={variant} {...props} />;
};

export default CustomButton;
