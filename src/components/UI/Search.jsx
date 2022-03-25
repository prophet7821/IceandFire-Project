import React, { useState, useEffect } from "react";
import { Grid, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const SearchBar = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    border: "2px #000",
    backgroundColor: "#fff",
    borderRadius: "10px",
    fontWeight: "bold",
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
});

const Search = ({ characters, filteredCharacters, setFilteredCharacters }) => {
  const handleChange = async (e) => {
    const selected = characters.filter((character) =>
      character.fullName.startsWith(e.target.value)
    );
    setFilteredCharacters(selected);
  };

  return (
    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
      <SearchBar
        fullWidth
        placeholder="Search Character"
        onChange={handleChange}
      />
    </Grid>
  );
};

export default Search;
