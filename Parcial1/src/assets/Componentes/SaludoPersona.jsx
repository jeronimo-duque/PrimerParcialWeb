import React from "react";
import { useState } from "react";

export const SaludoPersona = () => {
    const [nombre, ponNombre] = useState('');
    const [hora, setHora] = useState('');
    const saludo = () => {
      let saludando = 'Buenos días';
      if (hora >= 12 && hora < 18) {
        saludando = 'Buenas tardes';
      } else if (hora >= 18 && hora < 24) {
        saludando = 'Buenas noches';
      }
      console.log(`${saludando}, ${nombre}`);
    };
    return (
      <div>
        <h1>saluda :)</h1>
        <input type="text"  onChange={(e) => ponNombre(e.target.value)} />
        <input type="text"  onChange={(e) => setHora(e.target.value)} />
        <button onClick={saludo}>Saludame</button>
      </div>
    );
  };