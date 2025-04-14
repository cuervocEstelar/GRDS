import React from 'react';
import styles from './Item.module.css'; // CSS Module
import Button from '../buttons/Button';
import Boleto from './Boleto';

const Item = ({ clientName, clientRUT }) => {

  const formatearRUT = (rut) => {
    const cleanRut = rut.replace(/\D/g, ''); // Solo números
    const cuerpo = cleanRut.slice(0, -1);
    const dv = cleanRut.slice(-1);
   
    let cuerpoFormateado = '';
    let i = 0;
  
    for (let j = cuerpo.length - 1; j >= 0; j--) {
      cuerpoFormateado = cuerpo[j] + cuerpoFormateado;
      i++;
      if (i % 3 === 0 && j !== 0) cuerpoFormateado = '.' + cuerpoFormateado;
    }
  
    return `${cuerpoFormateado}-${dv}`;
  };

  return (

    <div className={styles['item-box']}>
      <div className={styles['item-info']}>
        <h2 className={styles['item-info-title']}>Estado del participante</h2>
        <div className={styles['item-name-container']}>
  <h2 className={styles['label-nombre']}>Nombre</h2>
  <p className={styles['item-name']}>{clientName}</p>
</div>



<div className={styles['item-column-container']}>
  <h2 className={styles['label-rut']}>RUT</h2>
  <p className={styles['item-rut']}>{formatearRUT(clientRUT)}</p>
</div>
        
        {/* <h2>Id Cliente</h2> */}
        {/* <p>{props.clientId}</p> */}
      </div>


      <div className={styles['item-status']}>

        <h2 className={styles['item-status-title']}>premios por ganar</h2> 
        <div className={styles.status}>

          <Boleto
          
          img="" 
          status={true}
          title=""
          description=""
          note=""
          
          />
        </div>


      </div>
    </div>
  );
};

export default Item;
