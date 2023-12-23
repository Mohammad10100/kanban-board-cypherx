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
    <div className={` h-[92vh] ` + theme.colors.bg}>
      <Ticket ticket={ticketData[0]} user={userData[0]}></Ticket>
    </div>
  )
}
