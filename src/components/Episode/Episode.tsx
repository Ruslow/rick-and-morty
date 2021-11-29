import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { IEpisode } from "../../redux/storeTypes";
import ButtonComp from "../Button/ButtonComp";

const Episode = (props: IEpisode) => {
  const [show, setShow] = useState(false);
  const { name, episode, air_date, characters } = props;
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
            {episode}
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="h5">
            {air_date}
          </Typography>
          <Typography gutterBottom variant="overline" component="h5">
            Characters:
          </Typography>
          <Grid container spacing={3}>
            {!show
              ? characters
                  .map((val) => {
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
              : characters.map((val) => {
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

export default Episode;
