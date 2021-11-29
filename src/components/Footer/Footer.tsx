import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        backgroundColor: "text.primary",
        color: "secondary.main",
        position: "relative",
      }}
    >
      <Typography variant="h6">
        SENLA {new Date().getFullYear()} &copy; All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
