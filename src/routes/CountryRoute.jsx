import React from 'react';
import Country from '../components/Country/Country';
import NavigationBtn from '../components/NavigationBtn/NavigationBtn';

export default function CountryRoute() {
  return (
    <>
      <Country />
      <NavigationBtn title={'Back to countries'} root={'/countries'} />
    </>
  );
}
