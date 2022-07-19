import React from "react";
import { Grid, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch} from "react-redux";
import { filterItem } from "../../redux/features/character/characterSlice";

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

const Search = () => {
  const dispatch = useDispatch();
  return (
    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
      <SearchBar
        fullWidth
        placeholder="Search Character"
        onChange={(e) => {
          dispatch(filterItem({content:e.target.value}));
        }}
      />
    </Grid>
  );
};

export default Search;
