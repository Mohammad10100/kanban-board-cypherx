import React, { useState } from 'react'
import { PiMoonFill } from "react-icons/pi";
import { MdSunny } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useTheme } from 'styled-components';

export default function Navbar() {
  const theme = useTheme()

  return (
    <div className={`flex justify-center ` + theme.colors.primary}>
      {console.log(theme.name)}
      <nav className={`navbar flex justify-between w-[97%] h-[8vh] items-center `}>

        <div className=' relative'>

          <div className="display flex items-center justify-between gap-[0.7rem] px-1 border-2 rounded-lg border-neutral-700 shadow-md">
            <GiSettingsKnobs className='  rotate-90' />
            <p className='  text-md'>Display</p>
            <MdKeyboardArrowDown />
          </div>

          {/* /DropDown */}
          <div className={` absolute top-[125%] ` + theme.colors.primary} >
            <div className={`flex flex-col px-[1.5rem] py-[1rem] items-center justify-between border-2 rounded-lg border-neutral-700 shadow-md gap-y-2.5 `} >
              <div className='flex gap-[2rem] justify-between  '>
                <div className={theme.colors.text_secondary}>Grouping</div>
                <div className="display flex items-center justify-between gap-[0.7rem] px-1 border-2 rounded-lg border-neutral-700 shadow-md ">
                  <select name="grouping" id="grouping" className={` `+ theme.colors.primary}>
                    <option value="User">User</option>
                    <option value="Status">Status</option>
                    <option value="Priority">Priority</option>
                  </select>
                </div>
              </div>
              
              <div className='flex gap-[2rem] justify-between'>
                <div className={theme.colors.text_secondary}>Ordering</div>
                <div className="display flex items-center justify-between gap-[0.7rem] px-1 border-2 rounded-lg border-neutral-700 shadow-md">
                  <select name="Ordering" id="Ordering" className={` `+ theme.colors.primary}>
                    <option value="Title">Title</option>
                    <option value="Priority">Priority</option>
                  </select>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="theme flex">
          {theme.name == 'light' ? <PiMoonFill /> : <MdSunny />}
        </div>
      </nav>
    </div>
  )
}
