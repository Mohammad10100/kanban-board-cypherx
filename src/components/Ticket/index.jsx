import React from 'react'
import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import Priority from './icons/Priority';
import { FaCircle } from "react-icons/fa";
import Status from './icons/Status';
import UserIcon from './icons/UserIcon';

export default function Ticket({ticket, user}) {
  const theme = useTheme()
  const ThemeValue = useSelector(state => state.theme.theme);

  return (
    <div className={theme.colors.primary +` flex-col ticket py-[0.8rem] px-[1.2rem] flex border-2 rounded-lg shadow-md gap-[0.5rem] `+ theme.colors.border_color}>
      <div class="top-line flex justify-between min-w-[100%]">
        <span className={` `+theme?.colors?.text_secondary}>{ticket?.id}</span>
        <div class="user-icon">
          <UserIcon user={user}></UserIcon>
          <div class="available-icon"></div>
          </div>
        </div>
      <div className="middle-line flex gap-[0.5rem] ">
        <div className=' my-1'>
          <Status status={ticket?.status}></Status>
        </div>
          <p>{ticket?.title}</p>
      </div>
      <div className="bottom-line flex items-center gap-[0.5rem]">
        <div className={` border-[1px] border-solid border-[#4a4a4a] rounded-sm p-1 ` + theme.colors.border_color}>
          <Priority priority={ticket?.priority}></Priority>
        </div>
        <div className={` flex gap-[5px] border-[1px] border-solid shadow-md border-[#4a4a4a]  items-center rounded-sm text-[0.85rem] px-1 `+ theme.colors.border_color}>
          <FaCircle color='#8D8D8D' />
          <span className={' flex items-center '+ theme.colors.text_secondary}>{ticket?.tag}</span>
        </div>
      </div>
    </div>
  )
}
