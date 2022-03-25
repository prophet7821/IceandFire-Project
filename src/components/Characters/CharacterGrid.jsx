import React from "react";
import CharacterCard from './CharacterCard';
import { Grid, Card  } from "@mui/material";

const CharacterGrid = ({ characterList }) => {
  return (
    <Grid container justifyContent="center">
      {characterList.map((character) => (
        <Grid item m={2}>
            <CharacterCard key={character.id}{...character}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default CharacterGrid;
