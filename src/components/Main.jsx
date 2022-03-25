//imports
import React, { useState, useEffect } from "react";
import { Grid, Divider, Chip } from "@mui/material";
import Search from "./UI/Search";
import CharacterGrid from "./Characters/CharacterGrid";

const Main = ({ characters }) => {
  //states
  const [filteredCharacters, setFilteredCharacters] = useState();

  //styles
  const style = {
    "z-index": "100",
  };

  return (
    <Grid style={style} container direction="row" justifyContent="center">
      {/* Search Grid */}
      <Grid container justifyContent="center" mt={25}>
        <Search
          characters={characters}
          filteredCharacters={filteredCharacters}
          setFilteredCharacters={setFilteredCharacters}
        />
      </Grid>

      <Grid container justifyContent="center" m={12}>
        {filteredCharacters && filteredCharacters.length > 0 ? (
          <CharacterGrid characterList={filteredCharacters} />
        ) : (
          <CharacterGrid characterList={characters} />
        )}
      </Grid>
    </Grid>
  );
};

export default Main;
