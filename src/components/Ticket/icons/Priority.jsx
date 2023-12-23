import React from 'react'
import { TbAntennaBars1 } from "react-icons/tb";
import { TbAntennaBars2 } from "react-icons/tb";
import { TbAntennaBars3 } from "react-icons/tb";
import { TbAntennaBars4 } from "react-icons/tb";
import { MdPriorityHigh } from "react-icons/md";
import { useTheme } from 'styled-components';

export default function Priority({priority}) {
    const theme = useTheme()



    const returnIcon = ()=> {
        switch (priority) {
            case 0:
                return <TbAntennaBars1/>
            case 1:
                return <TbAntennaBars2/>
            case 2:
                return <TbAntennaBars3/>
            case 3:
                return <TbAntennaBars4/>
            case 4:
                return (
                    <div className=' flex justify-center bg-orange-400 w-[1rem] h-[1rem] rounded-sm'>
                        <MdPriorityHigh fill={theme.colors.textc}/>
                    </div>
                )
        }
    }
    
  return (
    <div>
        {returnIcon()}
    </div>
  )
}
