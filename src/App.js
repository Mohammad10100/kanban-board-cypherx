import { useSelector } from 'react-redux';
import './App.css';
import Home from './pages/Home';
import React, { useState } from "react";
import { ThemeProvider } from 'styled-components';

const lightTheme = {
  colors: {
    primary: 'bg-[#ffff]',
    bg: 'bg-[#F4F5F8]',
    text: 'text-black',
    text_secondary: 'text-gray-400',
    textc: 'white',
    grey: '#aaa',
    border_color:'border-[#e6e7eb]',
  },
  fontSize: '16px',
  name:'light',
};

const darkTheme = {
  colors: {
    primary: 'bg-[#161B22]',
    bg: 'bg-[#010409]',
    text: 'text-white',
    textc: 'black',
    text_secondary: 'text-gray-400',
    grey: '#555',
    border_color:'border-[#4a4a4a;]',
  },
  fontSize: '16px',
  name:'dark',
};


function App() {
  const ThemeValue = useSelector(state => state.theme.theme);

  return (
    <ThemeProvider theme={ThemeValue=='dark'?darkTheme:lightTheme}>
      <Home></Home>
    </ThemeProvider>
  );
}

export default App;
