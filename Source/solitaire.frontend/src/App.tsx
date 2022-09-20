import React from 'react';
import NavbarComponent from "./components/navbar/NavbarComponent";
import Container from "./components/layout/Container";
import BoardComponent from "./components/board/BoardComponent";
import GameInfoComponent from "./components/board/GameInfoComponent";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
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
