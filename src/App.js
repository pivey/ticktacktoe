import React, { useEffect, useState } from 'react';
import './styles/App.css';
import styled from 'styled-components';
import Board from './components/Board';
import StartScreen from './components/StartScreen';
import PlayerInput from './components/PlayerInput';

const AppWrapper = styled.div`
  background: #333fcc;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [press, setPress] = useState(1);
  const [player, setPlayer] = useState(null);
  const gameStart = e => {
    setPress(e);
  };

  const submitHandle = e => {
    setPlayer(e);
    console.log(player, '*****');
    setPress(press + 1);
  };

  useEffect(() => console.log(press, player), [press, player]);

  const selection =
    (press === 1 && (
      <AppWrapper>
        <StartScreen clickHandle={gameStart} text="Play" />
      </AppWrapper>
    )) ||
    (press === 2 && (
      <AppWrapper>
        <PlayerInput submit={submitHandle} />
      </AppWrapper>
    )) ||
    (press === 3 && (
      <AppWrapper>
        <div>{player.user1}</div>
        <div>{player.user2}</div>
        <Board />
      </AppWrapper>
    ));

  return <>{selection}</>;
}
export default App;
