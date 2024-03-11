import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import DarkModeButton from './components/DarkMode/DarkModeButton'; // Import the DarkModeButton component

const App = () => {
  return (
    <>
      <DarkModeButton /> {/* Include the DarkModeButton component */}
      <Sidebar />
      <Main />
    </>
  );
};

export default App;
