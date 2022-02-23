import React from 'react';
import Form from './components/Form';

// abrindo PR
class App extends React.Component {
  render() {
    return (
      <div className="main">
        <h1>Tryunfo</h1>
        <h2>Adicionar nova carta</h2>
        <div className="addCard">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
