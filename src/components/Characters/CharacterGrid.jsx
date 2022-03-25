import React from "react";

import { Grid, Card } from "@mui/material";

const CharacterGrid = ({ characterList }) => {
  return (
    <Grid container justifyContent="center">
      {characterList.map((character) => (
        <Grid item m={2}>
          <Card>
              
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CharacterGrid;
