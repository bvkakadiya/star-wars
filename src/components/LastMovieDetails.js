import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  movieDetails: {
    minWidth: 200,
    position: "relative",
    width: "100%",
    padding: "1rem",
    background: "rgba(0, 0, 0, 0.7)",
    borderRadius: "10px",
    color: "#fff",
    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.5)",

    minHeight: "45vh",
    overflow: "auto",
  },

  divider: {
    margin: "1rem",
  },
  cardContent: {
    alignItems: "left",
    justifyContent: "left",
  },
}));

const MovieDetailsPage = ({ MovieDetails }) => {
  const classes = useStyles();
  let isVisible = MovieDetails.length > 0;
  let lastMovie = MovieDetails[MovieDetails.length - 1];
  return (
    <Card
      className={classes.movieDetails}
      hidden={!isVisible}
      variant="outlined"
    >
      <CardContent className={classes.cardContent}>
        <Typography>Last Movie Name </Typography>
        <Typography variant="h5" component="h5">
          {lastMovie && lastMovie.title}
        </Typography>
        <Typography>Last Movie Date </Typography>
        <Typography>{lastMovie && lastMovie.release_date}</Typography>
      </CardContent>
    </Card>
  );
};

export default MovieDetailsPage;
