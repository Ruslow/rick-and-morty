import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";

const SingleReview = ({ name, email, age, feedback }: any) => {
  return (
    <Grid item xs={4}>
      <Card
        sx={{
          maxWidth: 345,
          maxHeight: 350,
          backgroundColor: "secondary.main",
          color: "text.primary",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            {name}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="h5">
            {email}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="h5">
            {age}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="h5">
            {feedback}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SingleReview;
