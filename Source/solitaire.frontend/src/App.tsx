import React from 'react';
import NavbarComponent from "./components/navbar/NavbarComponent";
import Container from "./components/layout/Container";
import BoardComponent from "./components/board/BoardComponent";
import GameInfoComponent from "./components/board/GameInfoComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Container>
        <BoardComponent/>
        <GameInfoComponent/>
      </Container>
    </div>
  );
}

export default App;
