import React from "react";
import CharacterCard from "./CharacterCard";
import { Grid} from "@mui/material";
import {useSelector} from 'react-redux';

const CharacterGrid = () => {
  const {selectedCharacters} = useSelector((state) =>state.characters);
  return (
      <Grid container justifyContent="center">
        {selectedCharacters.map((character,index) => (
          <Grid key={character.id} item m={2}>
            <CharacterCard  {...character} />
          </Grid>
        ))}
      </Grid>
  );
};

export default CharacterGrid;
