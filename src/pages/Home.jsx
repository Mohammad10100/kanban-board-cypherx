import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main';
import { useTheme } from 'styled-components';

export default function Container() {
    const theme = useTheme();

  return (
    <>
      <div className={`section w-[full] `+theme.colors.bg+ ' ' + theme.colors.text}>
      <Navbar></Navbar>
      <div className=" flex items-center justify-center ">
        <Main></Main>
      </div>
      <></>
      </div>
    </>
  )
}
