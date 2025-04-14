import React from 'react'
import CalendarIcon from './../../public/Calendar.svg'; 
const Fecha = ({fechaInicio, fechaTermino}) => {
  return (
    <div className='fechaContainer'>
<img src={CalendarIcon} alt="Calendario" className="iconoCalendario" /><div>{fechaInicio}</div> - <div>{fechaTermino}</div>

    </div>
  )
}

export default Fecha