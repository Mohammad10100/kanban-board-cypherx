import React, { useState } from 'react'
import { PiMoonFill } from "react-icons/pi";
import { MdSunny } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useTheme } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '../slices/themeSlice'

export default function Navbar() {
  const theme = useTheme()
  
  const ThemeValue = useSelector(state => state.theme.theme);
  const dispatch = useDispatch()
  const changeTheme = ()=>{
    ThemeValue == 'dark'?dispatch(setTheme('light')):dispatch(setTheme('dark'));
  }

  const [displayOptions, setDisplayOptions] = useState(false);
  const setDropDown = ()=>{
    setDisplayOptions(!displayOptions);
  }
  const hideDropDown = ()=>{
    console.log('blurr');
    setDisplayOptions(false);
  }

  return (
    <div className={`flex justify-center ` + theme.colors.primary}>
      <nav className={`navbar flex justify-between w-[97%] h-[8vh] items-center `}>

        <div className=' relative'>

          {/* Button  */}
          <div className={`display flex items-center justify-between gap-[0.7rem] px-1 border-2 rounded-lg shadow-md `+theme.colors.border_color} onClick={setDropDown}>
            <GiSettingsKnobs className='  rotate-90' />
            <p className='  text-md'>Display</p>
            <MdKeyboardArrowDown />
          </div>

          {/* /DropDown */}
          <div className={` absolute top-[125%] ` + (displayOptions?' ':' hidden ') + theme.colors.primary} >
            <div className={`flex flex-col px-[1.5rem] py-[1rem] items-center justify-between border-2 rounded-lg shadow-md gap-y-2.5 `+ theme.colors.border_color} >
              <div className='flex gap-[2rem] justify-between  '>
                <div className={theme.colors.text_secondary}>Grouping</div>
                <div className={`display flex items-center justify-between gap-[0.7rem] px-1 border-2 rounded-lg shadow-md ` + theme.colors.border_color}>
                  <select name="grouping" id="grouping" className={` `+ theme.colors.primary}>
                    <option value="User">User</option>
                    <option value="Status">Status</option>
                    <option value="Priority">Priority</option>
                  </select>
                </div>
              </div>
              
              <div className='flex gap-[2rem] justify-between'>
                <div className={theme.colors.text_secondary}>Ordering</div>
                <div className={`display flex items-center justify-between gap-[0.7rem] px-1 border-2 rounded-lg  shadow-md ` + theme.colors.border_color}>
                  <select name="Ordering" id="Ordering" className={` `+ theme.colors.primary}>
                    <option value="Title">Title</option>
                    <option value="Priority">Priority</option>
                  </select>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="theme flex" onClick={changeTheme}>
          {theme.name == 'light' ? <PiMoonFill /> : <MdSunny />}
        </div>
      </nav>
    </div>
  )
}
