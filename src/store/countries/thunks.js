import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from './../../services/api';
import { sliceName } from './constants';

const thunks = {
  fetchCountries: createAsyncThunk(`${sliceName}/fetchCountries`, async () => {
    const response = await api.get();
    return response;
  }),
  fetchCountry: createAsyncThunk(`${sliceName}/fetchCountry`, async id => {
    const response = await api.get(id);
    return response;
  }),
  fetchDeleteCountry: createAsyncThunk(`${sliceName}/fetchDeleteCountry`, async id => {
    await api.delete(id);
    return id;
  }),
};
export default thunks;
