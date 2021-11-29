import React from "react";
import { Button, ButtonProps } from "@mui/material";

const ButtonComp: React.FC<ButtonProps> = (props) => {
  return <Button {...props}></Button>;
};

export default ButtonComp;
