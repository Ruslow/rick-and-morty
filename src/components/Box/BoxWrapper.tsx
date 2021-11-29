import { Box } from "@mui/system";
import React from "react";

const BoxWrapper = (props: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "calc(100vh - 64px - 32px)",
        position: "relative",
        top: "64px",
      }}
    >
      {props.children}
    </Box>
  );
};

export default BoxWrapper;
