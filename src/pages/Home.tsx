import { Container, Typography } from "@mui/material";
import React from "react";
import BoxWrapper from "../components/Box/BoxWrapper";
import cover from "../assets/images/625910.png";
const Home = () => {
  return (
    <BoxWrapper>
      <Container sx={{ padding: "2em 0 8em", textAlign: "center" }}>
        <Typography variant="h1" fontFamily="Home">
          Hello there
        </Typography>
        <Typography marginBottom="1em" variant="h4" fontFamily="Home">
          Welcome to Rick and Morty party
        </Typography>
        <img
          style={{ width: "100%", borderRadius: "10px" }}
          src={cover}
          alt="Rick and Morty"
        />
      </Container>
    </BoxWrapper>
  );
};

export default Home;
