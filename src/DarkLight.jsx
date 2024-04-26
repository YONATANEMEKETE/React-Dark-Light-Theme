import React from 'react';
import UseLocalStroage from './UseLocalStroage';
import './App.css';

function DarkLight() {
  const [theme, setTheme] = UseLocalStroage('theme', 'dark');

  function handleToggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log(theme);
  }

  return (
    <div className="dark-light-theme" data-theme={theme}>
      <div className="container">
        <p>hello World !</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}

export default DarkLight;
