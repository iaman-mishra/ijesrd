import { Box, Typography } from "@mui/material";
import React from "react";

interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ title, subtitle }) => {
  return (
    <Box>
      <Typography variant="h3" fontWeight={700} color="primary">
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" mt={1}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default AuthHeader;
