import { Typography } from "@mui/material";
import React from "react";

const Title = ({ children }: any) => {
  return (
    <Typography
      paddingTop="2rem"
      textAlign="center"
      gutterBottom
      variant="h1"
      component="h3"
      fontFamily="Home"
    >
      {children}
    </Typography>
  );
};

export default Title;
