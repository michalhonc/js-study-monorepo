import React from 'react';
import './App.css';

const title = 'NEXT-LEVEL';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Container">
        <div className="Anime">
          {title}
          {/*title.split('').map((letter) => (
            <span className="letter">{letter}</span>
          ))*/}
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
