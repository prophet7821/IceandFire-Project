//imports
import React from "react";
import { Grid } from "@mui/material";
import Search from "./UI/Search";
import CharacterGrid from "./Characters/CharacterGrid";
import { useSelector } from "react-redux";
const Main = () => {
  //styles
  const style = {
    zIndex: "100",
  };

  const { isLoading } = useSelector((state) => state.characters);

  return (
    <Grid style={style} container direction="row" justifyContent="center">
      {/* Search Grid */}
      <Grid container justifyContent="center" mt={25}>
        <Search />
      </Grid>

      {isLoading && (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      )}

      
      {/* Character Card */}
      <Grid container mt={5}>
        <CharacterGrid />
      </Grid>
    </Grid>
  );
};

export default Main;
