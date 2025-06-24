import React from 'react'
import "./TableParticipants.css"
import Participants from './Participants';

import { io } from "socket.io-client";
import useSocket from '../../Hooks/useSocket';


const socket = io("http://bc-api.estelarbet.net");





const TableParticipants = () => {
    const { members } = useSocket(socket, 'campaign-1');




  return (
<div className="participantesContainer">


{members.map((member) => {
    return(
        <Participants 
        key={member.id}
        name={member.fullName}
        rut={member.rut}
        phone={member.phone}
        />
    )   
})}



</div>

  )
}

export default TableParticipants