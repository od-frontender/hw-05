import React from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { renderObject } from './../../utils/utils';
import useCountry from '../../hooks/useCountry';

export default function Country() {
  const { id } = useParams();

  const [searchParams] = useSearchParams();
  const translation = searchParams.get('trans');
  const navigation = useNavigate();
  const { selectedCountry, deleteCountry } = useCountry(id);

  const handleDelete = () => {
    deleteCountry(id);
    navigation('/countries');
  };

  return (
    <>
      {selectedCountry ? (
        <div>
          <h3>
            {translation
              ? selectedCountry.translations[translation].common
              : selectedCountry.name.common}
          </h3>
          <div>{renderObject(selectedCountry)}</div>
          <button onClick={handleDelete}>Delete country</button>
        </div>
      ) : null}
    </>
  );
}
