import React from 'react';

function Food({favourite}) {
  console.log(favourite);
  return <h3>I Like {favourite}</h3>
}

function App() {
  return (
    <div className="App">
      <h1>Hello!!</h1>
      <Food favourite="kimchi" />
      <Food favourite="ramen" />
      <Food favourite="samgiopsal" />
      <Food favourite="chikumi" />
    </div>
  );
}

export default App;
