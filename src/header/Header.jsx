import React from 'react'
import Brand from '../brand/Brand'
import Enlace from '../buttons/link'


const Header = () => {


  return (

<header id="mainHeader">
   

<Brand logoSrcProvider="./../../public/logoProvider.png" logoSrcEstelarbet="./../../public/logoEstelarbet.png"/>
   

<Enlace estiloscomponent="participaa participa-black" enlaceClick="https://www.estelarbet.vip" textenlace="Participa ahora" />


</header>

)
}

export default Header