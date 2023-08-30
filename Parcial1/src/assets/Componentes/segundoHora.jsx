import React from "react";
import { useState } from "react";

export const SegundoHora = () => {
    const [segundos, setSegundos] = useState('');
    const transformacionTiempo = () => {
      const horas = Math.floor(segundos / 3600);
      const minutos = Math.floor((segundos % 3600) / 60);
      const segundoS = segundos % 60;
      console.log(`H: ${horas}, M: ${minutos}, S: ${segundoS}`);
    };
    return (
      <div>
        <h1>Convertir Segundos :)</h1>
        <input type="text" onChange={(e) => setSegundos(e.target.value)} />
        <button onClick={transformacionTiempo}>Go</button>
      </div>
    );
  };
  