import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

interface ICardProps {
  image: string;
  name: string;
  species: string;
  id: number;
}

export default function MediaCard({ image, name, species, id }: ICardProps) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        maxHeight: 350,
        backgroundColor: "secondary.main",
        color: "text.primary",
      }}
    >
      <CardMedia component="img" height="200" image={image} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h5">
          {name}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="h5">
          {species}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/character/${id}`}>
          <Button color="inherit" size="small">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
