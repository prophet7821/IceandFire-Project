import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  characters: [],
  selectedCharacters: [],
  isLoading: true,
};

export const getCharacters = createAsyncThunk(
  "character/getCharacters",
  async (name, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://api.got.show/api/show/characters"
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    filterItem: (state, { payload }) => {
      const content = payload.content;
      const selected = state.characters.filter((character) =>
        character.name.startsWith(content)
      );
      state.selectedCharacters =
        selected && selected.length > 0 ? selected : state.characters;
    },
  },
  extraReducers: {
    [getCharacters.pending]: (state) => {
      state.isLoading = true;
    },
    [getCharacters.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.characters = action.payload;
      state.selectedCharacters = action.payload;
    },
    [getCharacters.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { filterItem } = characterSlice.actions;

export default characterSlice.reducer;
