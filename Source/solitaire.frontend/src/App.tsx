import React from 'react';
import NavbarComponent from "./components/navbar/NavbarComponent";
import Container from "./components/layout/Container";
import BoardComponent from "./components/board/BoardComponent";
import GameInfoComponent from "./components/board/GameInfoComponent";
import { DndProvider } from 'react-dnd'
import { MultiBackend } from 'react-dnd-multi-backend'
import { HTML5toTouch } from 'rdndmb-html5-to-touch'

function App() {
  return (
    <div className="App">
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
        <NavbarComponent/>
        <Container>
          <BoardComponent/>
          <GameInfoComponent/>
        </Container>
      </DndProvider>
    </div>
  );
}

export default App;
