import React from 'react'
import styles from './BoletoNot.module.css'

const BoletoNot = () => {
  return (
    <div className={styles.container}>
    
  <div className={styles.ItemContainer}>
<h4>
  ESTADO DEL PARTICIPANTE 
</h4>

<img src="./../../public/gato.png" alt="" />


<b>Parece que no has participado todavía</b>
<p>¡Vamos!, anímate y hazlo ahora </p>

<a href="https://www.estelarbet.vip" className={styles.link}>Participa aquí</a>
  </div>
      
      </div>
  )
}

export default BoletoNot