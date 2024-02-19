import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import thunks from '../store/countries/thunks';

export default function useCountry(id) {
  const dispatch = useDispatch();
  const { selectedCountry } = useSelector(state => state.countries);

  useEffect(() => {
    !selectedCountry && dispatch(thunks.fetchCountry(id));
  }, []);

  const deleteCountry = () => {
    dispatch(thunks.fetchDeleteCountry(id));
  };
  return { selectedCountry, deleteCountry };
}
