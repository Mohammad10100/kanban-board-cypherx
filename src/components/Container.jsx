import React from 'react'
import Navbar from './Navbar'
import Main from './Main';
import { useTheme } from 'styled-components';

export default function Container() {
    const theme = useTheme();

  return (
    <>
      <div className={`section ` + theme.colors.text}>
      <Navbar></Navbar>
      <Main></Main>
      <></>
      </div>
    </>
  )
}
