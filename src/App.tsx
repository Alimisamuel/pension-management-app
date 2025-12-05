import React from 'react';
import './App.css';
import { ThemeContextProvider } from './theme/ThemeContextProvider';
import { Routes } from './routes';
import { AuthProvider } from './hooks/useAuth';

function App() {
  return (
    <ThemeContextProvider>
      <AuthProvider>
        <div id="continerBackdrop"></div>
        <Routes />
      </AuthProvider>
    </ThemeContextProvider>
  );
}

export default App;
