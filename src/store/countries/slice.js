import { createSlice } from '@reduxjs/toolkit';
import thunks from './thunks';
import { sliceName } from './constants';

const initialState = {
  countries: [],
  selectedCountry: null,
  selectedTranslation: null,
};

export const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setCountry(state, { payload }) {
      if (!payload) {
        state.selectedCountry = state.countries[0];
      } else {
        state.selectedCountry = state.countries.find(item => item.id === payload);
      }
    },
    setTranslation(state, { payload }) {
      if (!payload && state.selectedCountry) {
        state.selectedTranslation = Object.keys(state.selectedCountry.translations)[0];
      } else if (payload) {
        state.selectedTranslation = payload;
      }
    },
  },

  extraReducers: builder => {
    builder
      .addCase(thunks.fetchCountries.fulfilled, (state, { payload }) => {
        state.countries = payload;
      })
      .addCase(thunks.fetchCountry.fulfilled, (state, { payload }) => {
        state.selectedCountry = payload;
      })
      .addCase(thunks.fetchDeleteCountry.fulfilled, (state, { payload }) => {
        state.selectedCountry = null;
        state.countries = state.countries.filter(item => item.id !== payload);
      });
  },
});
export const { setCountry, setTranslation } = slice.actions;
export default slice.reducer;
