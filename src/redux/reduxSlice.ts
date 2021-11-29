import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ICharacter,
  IEpisode,
  IInitState,
  ILocation,
  Info,
} from "./storeTypes";

const initialState: IInitState = {
  characters: [],
  episodes: [],
  locations: [],
  menuShow: false,
  loading: true,
  info: {},
  reviews: [],
};

export type ValueType = "locations" | "episodes" | "characters";

export const getData: any = createAsyncThunk(
  "store/getData",
  async ({ query, page }: { query: string; page: number }) => {
    return axios
      .get(`https://rickandmortyapi.com/api/${query}/?page=${page}`)
      .then((res) => {
        return { data: res.data, value: `${query}s` };
      })
      .catch((err) => {
        console.log(err);
        return {};
      });
  }
);

const slice = createSlice({
  name: "store",
  initialState,
  reducers: {
    showMenu: (state) => {
      state.menuShow = true;
    },
    hideMenu: (state) => {
      state.menuShow = false;
    },
    addReview: (state, action) => {
      state.reviews = [...state.reviews, action.payload];
    },
  },
  extraReducers: {
    [getData.pending]: (state, action) => {
      state.loading = true;
    },
    [getData.fulfilled]: (
      state,
      action: {
        meta: unknown;
        type: string;
        payload: {
          data: {
            info: Info;
            results: IEpisode[] & ILocation[] & ICharacter[];
          };
          value: ValueType;
        };
      }
    ) => {
      state.loading = false;
      state.info = action.payload.data.info;
      state[action.payload.value] = action.payload.data.results;
    },
    [getData.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const { showMenu, hideMenu, addReview } = slice.actions;

export default slice.reducer;
