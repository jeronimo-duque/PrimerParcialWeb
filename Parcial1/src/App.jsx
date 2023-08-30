import React, { useState } from 'react';
import {SegundoHora} from './assets/Componentes/segundoHora'
import {CosteLlamada} from './assets/Componentes/costeLlamada'
import {SaludoPersona} from './assets/Componentes/SaludoPersona'

function App() {
  return (
    <div className="App">
      <SegundoHora/>
      <CosteLlamada/>
      <SaludoPersona/>
    </div>
  );
}

export default App;
