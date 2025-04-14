import React from 'react'
import  './brand.css';
const Brand = ({logoSrcProvider ,logoSrcEstelarbet}) => {
  return (
<div className='BrandContainer'>

      <img className="brand-logo-Provider" src={logoSrcProvider} alt="logo" />
      <i>x</i>
      <img className="brand-logo-Estelarbet" src={logoSrcEstelarbet} alt="logo" />
    
</div>
   
)
}

export default Brand