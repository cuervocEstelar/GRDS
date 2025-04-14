import React from 'react'
import './button.css'


const Enlace = ({estiloscomponent, textenlace , enlaceClick}) => {
  return (
    <a href={enlaceClick} className={estiloscomponent}>{textenlace}</a>
  )
}

export default Enlace