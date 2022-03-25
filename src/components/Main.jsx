import React,{ useState ,useEffect} from "react";

import { Grid ,Card} from "@mui/material";

import Search from "./UI/Search";
import CharacterGrid from './Characters/CharacterGrid';

const Main = ({ characters }) => {
  //states
  const [filteredCharacters, setFilteredCharacters] = useState();

  const style = {
    "z-index": "100",
  };

  return (
    <Grid style={style} container direction="row" justifyContent="center">
      {/* Search Grid */}
      <Grid container justifyContent="center">
        <Search
          characters={characters}
          filteredCharacters={filteredCharacters}
          setFilteredCharacters={setFilteredCharacters}
        />
      </Grid>

    {
      filteredCharacters && filteredCharacters.length > 0 ? (
        <CharacterGrid characterList={filteredCharacters}/>
      ) : (
        <CharacterGrid characterList={characters}/>
      )
    }
      {/* <Grid container justifyContent="center">
        <Grid item>
          <Card></Card>
        </Grid>
      </Grid> */}

    </Grid>
  );
};

export default Main;
