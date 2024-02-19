import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavigationBtn({ title, root }) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(root);
  };
  return <button onClick={handleRedirect}>{title}</button>;
}
