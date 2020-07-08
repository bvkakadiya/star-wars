import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Grid, CircularProgress, makeStyles } from "@material-ui/core";

import CharacterPicker from "./CharacterPicker";
import LastMovieDetails from "./LastMovieDetails";
import MovieDetailsPage from "./MovieDetailsPage";

import {
  loadCharacters,
  loadMovieDetails,
} from "../redux/actions/starWarsActions";
const useStyles = makeStyles((theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,1)",
      outline: "1px solid slategrey",
    },
  },
  gridRoot: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    minHeight: "50vh",
    color: theme.palette.text.secondary,
  },
}));
const HomePage = ({
  loadCharacters,
  loadMovieDetails,
  CharactersList,
  MovieDetails,
}) => {
  const [loading, setLoading] = useState(false);
  const [movieDetailsLoading, setMovieDetailsLoading] = useState(false);
  const classes = useStyles();
  // const { t, i18n } = useTranslation();

  // ComponentDidMount
  useEffect(() => {
    setLoading(true);
    loadCharacters()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("Loading Characters failed " + error);
      });
  }, []);

  const handleCharactersSelect = (e) => {
    setMovieDetailsLoading(true);
    let characterProfile = CharactersList.filter(
      (character) => character.name === e.target.innerText
    );
    if (characterProfile.length === 1) {
      loadMovieDetails(characterProfile[0].films)
        .then(() => {
          setMovieDetailsLoading(false);
        })
        .catch((error) => {
          setMovieDetailsLoading(false);
          alert("Loading Characters failed " + error);
        });
    }
  };

  return (
    <Grid
      className={classes.gridRoot}
      container
      direction="row"
      spacing={3}
      justify="space-between"
      alignItems="center"
    >
      <Grid item xs={12}>
        {loading ? (
          <CircularProgress />
        ) : (
          <CharacterPicker
            handleCharactersChange={handleCharactersSelect}
            CharactersList={CharactersList}
          />
        )}
      </Grid>
      <Grid item xs={6}>
        {movieDetailsLoading ? (
          <CircularProgress />
        ) : (
          <MovieDetailsPage MovieDetails={MovieDetails} />
        )}
      </Grid>
      <Grid item xs={6}>
        {movieDetailsLoading ? (
          <CircularProgress />
        ) : (
          <LastMovieDetails MovieDetails={MovieDetails} />
        )}
      </Grid>
    </Grid>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    CharactersList: state.starWars.CharactersList,
    MovieDetails: state.starWars.MovieDetails,
  };
}

const mapDispatchToProps = {
  loadCharacters,
  loadMovieDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
