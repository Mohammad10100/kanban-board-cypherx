import React from 'react'

export default function UserIcon({user}) {
  return (
    <div className=' flex relative bg-red-400 rounded-full w-[1rem] h-[1rem] items-center justify-center'>
        <div className="name text-[0.5rem] text-white ">{user?.name?.split(" ").map((word)=>word[0]).join('').toUpperCase()}</div>
        <div className={` available-icon absolute bottom-0 right-0 z-10 rounded-full min-w-[5px] min-h-[5px] outline-white outline-[1px] outline ` + (user?.available?'bg-yellow-400':'bg-[gray]')}></div>
    </div>
  )
}
