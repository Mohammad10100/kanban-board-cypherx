import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import Ticket from './Ticket/index'
import axios from 'axios';

export default function Main() {
  const theme = useTheme()
  const TASK_DATA_URL = 'https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers'
  const [ticketData, setTicketData]= useState({});
  const [userData, setUserData]= useState({});

  useEffect(() => {
    axios.get(TASK_DATA_URL)
      .then(response => {
        setTicketData(response.data.tickets);
        setUserData(response.data.users);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className={` h-[92vh] w-[97%] justify-center grid grid-cols-none xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 p-5 gap-[15px]  ` + theme.colors.bg}>
      <div className="container flex flex-col w-[90vw] xs:w-[auto] sm:w-[auto] md:w-[auto] lg:w-[auto] xl:w-[auto] 2xl:w-[auto] gap-[5px] ">
        <Ticket ticket={ticketData[0]} user={userData[0]}></Ticket>
        <Ticket ticket={ticketData[0]} user={userData[0]}></Ticket>
        <Ticket ticket={ticketData[0]} user={userData[0]}></Ticket>
        <Ticket ticket={ticketData[0]} user={userData[0]}></Ticket>
        <Ticket ticket={ticketData[0]} user={userData[0]}></Ticket>
      </div>
      <div className="container flex flex-col w-[90vw] xs:w-[auto] sm:w-[auto] md:w-[auto] lg:w-[auto] xl:w-[auto] 2xl:w-[auto] gap-[5px] ">
        <Ticket ticket={ticketData[0]} user={userData[0]}></Ticket>
        <Ticket ticket={ticketData[0]} user={userData[0]}></Ticket>
        <Ticket ticket={ticketData[0]} user={userData[0]}></Ticket>
        <Ticket ticket={ticketData[0]} user={userData[0]}></Ticket>
        <Ticket ticket={ticketData[0]} user={userData[0]}></Ticket>
      </div>
      <div className="container flex flex-col w-[90vw] xs:w-[auto] sm:w-[auto] md:w-[auto] lg:w-[auto] xl:w-[auto] 2xl:w-[auto] gap-[5px] ">
        <Ticket ticket={ticketData[0]} user={userData[0]}></Ticket>
        <Ticket ticket={ticketData[0]} user={userData[0]}></Ticket>
        <Ticket ticket={ticketData[0]} user={userData[0]}></Ticket>
        <Ticket ticket={ticketData[0]} user={userData[0]}></Ticket>
        <Ticket ticket={ticketData[0]} user={userData[0]}></Ticket>
      </div>
      <div className="container flex flex-col w-[90vw] xs:w-[auto] sm:w-[auto] md:w-[auto] lg:w-[auto] xl:w-[auto] 2xl:w-[auto] gap-[5px] ">
        <Ticket ticket={ticketData[0]} user={userData[0]}></Ticket>
        <Ticket ticket={ticketData[0]} user={userData[0]}></Ticket>
        <Ticket ticket={ticketData[0]} user={userData[0]}></Ticket>
        <Ticket ticket={ticketData[0]} user={userData[0]}></Ticket>
        <Ticket ticket={ticketData[0]} user={userData[0]}></Ticket>
      </div>
      <div className="container flex flex-col w-[90vw] xs:w-[auto] sm:w-[auto] md:w-[auto] lg:w-[auto] xl:w-[auto] 2xl:w-[auto] gap-[5px] ">
        <Ticket ticket={ticketData[0]} user={userData[0]}></Ticket>
        <Ticket ticket={ticketData[0]} user={userData[0]}></Ticket>
        <Ticket ticket={ticketData[0]} user={userData[0]}></Ticket>
        <Ticket ticket={ticketData[0]} user={userData[0]}></Ticket>
        <Ticket ticket={ticketData[0]} user={userData[0]}></Ticket>
      </div>
      
    </div>
  )
}
