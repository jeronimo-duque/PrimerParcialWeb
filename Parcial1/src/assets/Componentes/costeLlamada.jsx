import React from "react";
import { useState } from "react";

export const CosteLlamada = () => {
    const [minutillos, minutillosinput] = useState('');
    const costos = () => {
      let precio = 0;
      if (minutillos <= 3) {
        precio = 100;
      } else {
        precio = 100 + (minutillos - 3) * 50;
      }
      console.log(`Costo: ${precio} en pesos`);
    };
    return (
      <div>
        <h1>Calcule el costo de su llamada :)</h1>
        <input type="text" placeholder="cantidad de minutos" onChange={(e) => minutillosinput(e.target.value)} />
        <button onClick={costos}>Go</button>
      </div>
    );
  };