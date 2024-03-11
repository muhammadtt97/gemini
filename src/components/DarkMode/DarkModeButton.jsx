import React, { useContext } from 'react';
import { Context } from '../../context/Context';
import './DarkModeButton.css';

const DarkModeButton = () => {
  const { darkMode, toggleDarkMode } = useContext(Context);

  return (
    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeButton;
