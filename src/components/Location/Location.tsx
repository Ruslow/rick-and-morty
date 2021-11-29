import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonComp from "../Button/ButtonComp";

const Location = (props: any) => {
  const [show, setShow] = useState(false);

  const { name, type, dimension, residents } = props;
  return (
    <Grid item xs={4}>
      <Card
        sx={{
          maxWidth: 345,
          backgroundColor: "secondary.main",
          color: "text.primary",
          transition: "2s",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            {name}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="h5">
            {type}
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="h5">
            {dimension}
          </Typography>
          <Typography gutterBottom variant="overline" component="h5">
            Residents:
          </Typography>
          <Grid container spacing={3}>
            {!show
              ? residents
                  .map((val: any) => {
                    const end = val.substring(42);
                    const redir = val.substring(31);
                    return (
                      <Grid item xs={3}>
                        <Link to={`${redir}`}>
                          <CardMedia
                            component="img"
                            height="60"
                            style={{
                              width: "60px",
                              borderRadius: "50%",
                            }}
                            image={`https://rickandmortyapi.com/api/character/avatar/${end}.jpeg`}
                            alt={name}
                          />
                        </Link>
                      </Grid>
                    );
                  })
                  .slice(0, 4)
              : residents.map((val: any) => {
                  const end = val.substring(42);
                  const redir = val.substring(31);

                  return (
                    <Grid item xs={3}>
                      <Link to={`${redir}`}>
                        <CardMedia
                          component="img"
                          height="60"
                          style={{
                            width: "60px",
                            borderRadius: "50%",
                          }}
                          image={`https://rickandmortyapi.com/api/character/avatar/${end}.jpeg`}
                          alt={name}
                        />
                      </Link>
                    </Grid>
                  );
                })}
          </Grid>
        </CardContent>
        <CardActions>
          <ButtonComp
            onClick={() => {
              setShow(!show);
            }}
            color="inherit"
            size="small"
          >
            {show ? "less" : "more"}
          </ButtonComp>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Location;
