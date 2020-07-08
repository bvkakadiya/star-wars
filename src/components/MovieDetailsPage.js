import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Typography,
  ListItemText,
  Container,
  Card,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  movieContainer: {
    position: "relative",
    width: "100%",
    padding: "0.5rem",
    background: "rgba(0, 0, 0, 0.7)",
    borderRadius: "10px",
    color: "#fff",
    maxHeight: "45vh",
    minHeight: "45vh",
  },
  cardClass: {
    overflow: "auto",
    marginTop: "3rem",
    position: "relative",
    background: "rgba(0, 0, 0, 0.1)",
    color: "#fff",
    maxHeight: "30vh",
    minHeight: "30vh",
  },
}));

const MovieDetailsPage = ({ MovieDetails }) => {
  const classes = useStyles();
  let isVisible = MovieDetails.length > 0;
  return (
    <div hidden={!isVisible} className={classes.movieContainer}>
      <Typography
        variant="h6"
        component="h6"
        style={{ position: "fixed", margin: "1rem" }}
      >
        List of Movie
      </Typography>
      <Card className={classes.cardClass}>
        <List className={classes.movieList}>
          {isVisible &&
            MovieDetails.map((movie, i) => (
              <ListItem button>
                <ListItemText primary={movie.title} />
              </ListItem>
            ))}
        </List>
      </Card>
    </div>
  );
};

export default MovieDetailsPage;
