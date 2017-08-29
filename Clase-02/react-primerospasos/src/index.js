import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Button from './components/button/Button';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <Button
    value="Enviar"
    color="success"
    event={() => {
      alert('¡Enviado!');
    }}
  />,
  document.getElementById('root2')
);

ReactDOM.render(
  <Button
    value="Cancelar"
    color="cancel"
    event={() => {
      alert('¡Cancelado!');
    }}
  />,
  document.getElementById('root3')
);

ReactDOM.render(
  <Button
    value="Esperando"
    color="waiting"
    event={() => {
      alert('¡Esperando!');
    }}
  />,
  document.getElementById('root4')
);
registerServiceWorker();
