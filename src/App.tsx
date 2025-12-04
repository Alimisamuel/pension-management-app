import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeContextProvider } from './theme/ThemeContextProvider';
import { Routes } from './routes';

function App() {
  return (
    <ThemeContextProvider>
   <div id="continerBackdrop"></div>
<Routes/>
    </ThemeContextProvider>
  );
}

export default App;
