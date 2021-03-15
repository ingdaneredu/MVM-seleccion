import React from 'react';
import './App.css';
import {UseFile} from './components/receiverFile';
import socket from './components/Socket';

function App() {


  socket.emit('conectado',"ingresar");
  
  return (
    <>
    <div className="App">
      <h1>Tabla de datos</h1>
      <hr></hr>
      <UseFile/>
    </div>
    </>
  );
}

export default App;
