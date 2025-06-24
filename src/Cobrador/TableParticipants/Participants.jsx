import React from 'react'

const Participants = ({name, rut, phone}) => {

  return (
    <div className="participanteItem">
    
    <div className="userInfo">
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Foto del participante" className="foto" />
      <div className="datos">
        <div className="nombre">{name}</div>
        <div className="rut">{rut}</div>
        <div className="telefono">{phone}</div>
      </div>
    </div>

    <div className="premios">
      <div className="premioItem">
        <div className="accion">🎁 Registro</div>
        <div className="estado completado">✔ Completado</div>
        <div className="codigo">Código: REG123</div>
        <button className="btn-entregar">Entregar premio</button>
      </div>

      <div className="premioItem">
        <div className="accion">🛡️ Verificación</div>
        <div className="estado pendiente">⏳ Pendiente</div>
        <div className="codigo">-</div>
        <button className="btn-entregar" disabled>Entregar premio</button>
      </div>

      <div className="premioItem">
        <div className="accion">💰 Depósito</div>
        <div className="estado completado">✔ Completado</div>
        <div className="codigo">Código: DEP456</div>
        <button className="btn-entregar">Entregar premio</button>
      </div>
    </div>

  </div>
  )
}

export default Participants