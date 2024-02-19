import { useNavigate } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';

import './style.css';

import useCountries from '../../hooks/useCountries';
import useCountriesForm from '../../hooks/useCountriesForm';

export default function CountriesForm() {
  const { countries } = useCountries();
  const { selectedCountry, selectedTranslation, selectCountry, selectTranslation } =
    useCountriesForm(countries);

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`countries/${selectedCountry.id}?trans=${selectedTranslation}`);
  };
  const handleSelectedCountry = e => selectCountry(e.target.value);
  const handleSelectedTranslation = e => selectTranslation(e.target.value);

  return countries.length && selectedCountry ? (
    <form onSubmit={handleSubmit}>
      <label>
        Select capital:
        <select defaultValue={selectedCountry.id} onChange={handleSelectedCountry}>
          {countries.map(item => (
            <option key={item.id} value={item.id}>
              {item.capital[0]} {item.flag}
            </option>
          ))}
        </select>
      </label>
      <label>
        Select language:
        <select defaultValue={selectedTranslation} onChange={handleSelectedTranslation}>
          {Object.keys(selectedCountry.translations).map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <button>Get info about country {selectedCountry.name.official}</button>
    </form>
  ) : (
    <Skeleton variant="rectangular" animation="wave" width={200} height={70} />
  );
}
