"use client";

import Button, { ButtonProps } from "@mui/material/Button";
import Link from "next/link";

type LinkButtonProps = ButtonProps & {
  href: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({ href, ...props }) => {
  return <Button component={Link} href={href} {...props} />;
};

export default LinkButton;
