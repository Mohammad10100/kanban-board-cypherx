import { useSelector } from 'react-redux';
import './App.css';
import Container from './components/Container';
import React, { useState } from "react";
import { ThemeProvider } from 'styled-components';

const lightTheme = {
  colors: {
    primary: '#ffff',
    bg: '#F4F5F8',
    text: 'text-black',
    text_secondary: 'text-grey',
    grey: '#aaa',
  },
  fontSize: '16px',
  name:'light',
};

const darkTheme = {
  colors: {
    primary: 'bg-[#161B22]',
    bg: 'bg-[#010409]',
    text: 'text-white',
    text_secondary: 'text-gray-400',
    grey: '#555',
  },
  fontSize: '16px',
  name:'dark',
};


function App() {
  const ThemeValue = useSelector(state => state.theme.theme);

  return (
    <ThemeProvider theme={ThemeValue=='dark'?darkTheme:lightTheme}>
      <Container></Container>
    </ThemeProvider>
  );
}

export default App;
