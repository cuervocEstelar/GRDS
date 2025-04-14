import React, { useState } from "react";
import './FaqDropdown.css'

import { FaRegQuestionCircle } from "react-icons/fa";

import FaqDropdownopdown from './FaqDropdownItem'



const faqData = [
    { question: "¿Cualquiera puede participar en esta promoción?", answer: "Sí, cualquier usuario registrado puede participar en la promoción." },
    { question: "¿Cómo me registro?", answer: "Debes ingresar a la página oficial y completar el formulario de registro." },
    { question: "¿Cómo hago un depósito?", answer: "Puedes hacer un depósito desde la sección de pagos en tu cuenta." }
  ];
const FaqDropdown = () => {


   
  return (
    
    <div className='FaqDropdownContainer'>
  
        <div className="faqContainer">
        <FaRegQuestionCircle  className="FaRegQuestionCircle"/>
      <h2 className="faqTitle" id="preguntas">PREGUNTAS DE LA PROMO</h2>
      {faqData.map((item, index) => (
        <FaqDropdownopdown key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
    </div>
  )
}

export default FaqDropdown