import React from 'react'
import { LuCircle } from "react-icons/lu";
import { TbCircleDotted } from "react-icons/tb";
import { BiSolidCircleThreeQuarter } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";


export default function Status({status}) {
    const returnIcon = ()=> {
        switch (status) {
            case 'Todo':
                return <LuCircle />
            case 'Backlog':
                return <TbCircleDotted />
            case 'In progress':
                return <BiSolidCircleThreeQuarter fill='yellow'/>
            case 'In progress':
                return <MdCancel fill='gray'/>
            case 'In progress':
                return <IoIosCheckmarkCircle fill='blue'/>
        }
    }
    
  return (
    <div>
        {returnIcon()}
    </div>
  )
}
