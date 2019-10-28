import React from 'react';
import './styles/App.css';
import styled from 'styled-components';
import Board from './components/Board';
import StartScreen from './components/StartScreen';

const AppWrapper = styled.div`
  background: #333fcc;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const started = false;
  const gameStart = e => {
    console.log('hi');
    console.log(e.target);
  };

  return !started ? (
    <AppWrapper>
      <StartScreen clickHandle={gameStart} text="Play" />
    </AppWrapper>
  ) : (
    <AppWrapper>
      <Board />
    </AppWrapper>
  );
}

export default App;
