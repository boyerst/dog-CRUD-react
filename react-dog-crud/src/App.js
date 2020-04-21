import React from 'react';
import './App.css';
import DogContainer from './DogContainer'
import DogNewForm from './DogNewForm'

function App() {
  return (
    <div className="App">
      <h1>Dog CRUD</h1>
      <div>
        <DogContainer />
        <DogNewForm />
      </div>
    </div>

  );
}

export default App;
