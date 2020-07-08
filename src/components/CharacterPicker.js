import React from "react";
import { TextField, makeStyles } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  characterPickerContainer: {
    position: "relative",
    margin: theme.spacing(1),
    width: "100%",
    padding: "0.5rem",
    background: "#fff",
    borderRadius: "10px",
    color: "rgba(0, 0, 0, 0.7)",
    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.5)",
  },
}));
const CharacterPicker = ({ handleCharactersChange, CharactersList }) => {
  const classes = useStyles();
  return (
    <Autocomplete
      className={classes.characterPickerContainer}
      options={CharactersList}
      onChange={handleCharactersChange}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Character" variant="outlined" />
      )}
    />
  );
};

export default CharacterPicker;
