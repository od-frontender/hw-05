import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCountry, setTranslation } from '../store/countries/slice';

export default function useCountriesForm(countries) {
  const dispatch = useDispatch();
  const { selectedCountry, selectedTranslation } = useSelector(state => state.countries);

  useEffect(() => {
    if (countries.length) {
      dispatch(setCountry());
    }
  }, [countries]);

  const selectCountry = value => {
    dispatch(setCountry(value));
  };
  const selectTranslation = value => {
    dispatch(setTranslation(value));
  };

  useEffect(() => {
    dispatch(setTranslation());
  }, [selectedCountry]);

  return { selectCountry, selectTranslation, selectedCountry, selectedTranslation };
}
