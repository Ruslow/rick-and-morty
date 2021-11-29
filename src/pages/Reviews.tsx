import { Container, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import BoxWrapper from "../components/Box/BoxWrapper";
import SingleReview from "../components/Review/SingleReview";
import Title from "../components/Title/Title";
import { IInitState, IReview } from "../redux/storeTypes";

const Reviews = () => {
  const reviews = useSelector(
    (state: IInitState) => state.reviews
  ) as IReview[];
  return (
    <BoxWrapper>
      <Title>Reviews</Title>
      <Container sx={{ padding: "5rem 0" }}>
        <Grid sx={{ marginBottom: "4rem" }} container spacing={8}>
          {reviews.length !== 0 ? (
            reviews.map((rev: any) => {
              const { ...rest } = rev;
              return <SingleReview {...rest} />;
            })
          ) : (
            <h2>sorry there's no review</h2>
          )}
        </Grid>
      </Container>
    </BoxWrapper>
  );
};

export default Reviews;
