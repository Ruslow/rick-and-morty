import React from "react";

import { Meta, Story } from "@storybook/react";
import ButtonComp from "./ButtonComp";
import { ButtonProps } from "@mui/material";

export default {
  component: ButtonComp,
  title: "Components",
  argTypes: {
    variant: {
      options: ["text", "contained", "outlined"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    color: {
      options: ["primary", "secondary", "error", "success", "warning"],
      control: { type: "radio" },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <ButtonComp {...args} />;

export const Btn = Template.bind({});
Btn.args = {
  variant: "contained",
  value: "hello",
  size: "medium",
  color: "primary",
};

// export const Secondary = Template.bind({});
// Secondary.args = { variant: "outlined", value: "hello" };

// export const Primary: React.VFC<{}> = () => (
//   <Button variant="contained">Click</Button>
// );
// export const PrimarySmall: React.VFC<{}> = () => (
//   <Button variant="contained" size="small">
//     Click
//   </Button>
// );

// export const PrimaryLarge: React.VFC<{}> = () => (
//   <Button variant="contained" size="large">
//     Click
//   </Button>
// );

// export const Secondary: React.VFC<{}> = () => (
//   <Button variant="outlined">Click</Button>
// );
// export const SecondarySmall: React.VFC<{}> = () => (
//   <Button variant="outlined" size="small">
//     Click
//   </Button>
// );
// export const SecondaryLarge: React.VFC<{}> = () => (
//   <Button variant="outlined" size="large">
//     Click
//   </Button>
// );
