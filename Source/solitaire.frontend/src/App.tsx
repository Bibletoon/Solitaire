import React from 'react';
import NavbarComponent from "./components/navbar/NavbarComponent";
import { DndProvider } from 'react-dnd'
import { MultiBackend } from 'react-dnd-multi-backend'
import { HTML5toTouch } from 'rdndmb-html5-to-touch'
import GameComponent from "./components/game/GameComponent";

function App() {
  return (
    <div className="App">
        <NavbarComponent/>
        <GameComponent/>
    </div>
  );
}

export default App;
