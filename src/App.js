import React, { useEffect, useState, useRef } from 'react';
import './styles/App.css';
import styled from 'styled-components';
import Board from './components/Board';
import StartScreen from './components/StartScreen';
import PlayerInput from './components/PlayerInput';
import globals from './globals';

const { flex, noSelect } = globals;

let trackerHeight = 0;
let scoreHeight = 0;

const AppWrapper = styled.div`
  ${flex('center', 'center')}
  height: 100vh;
  width: 100vw;
  background: #008148;
`;

const FlexDiv = styled.div`
  display: flex;
`;

const TrackerHolder = styled.div`
  width: 40%;
  height: 100vh;
  background: #008148;
`;

const PlayerDiv = styled.div`
  ${flex('center', 'flex-start', 'column')}
  ${noSelect}
  box-sizing: border-box;
  width: 100%;
  height: ${trackerHeight / 9 / 16}rem;
  height: 5.14rem;
  color: white;
  padding-left: 1.2rem;
  font-size: 1.2rem;
`;

const PlayerName = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 0.4rem;
`;

const TrackerTitle = styled.div`
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  padding: 1.5rem;
  background: #d60361;
  color: white;
`;

function App() {
  const trackerRef = useRef(null);
  const scoreTitle = useRef(null);
  const [press, setPress] = useState(1);
  const [player, setPlayer] = useState(null);
  const [playerObject, setPlayerObject] = useState([]);
  const [hasWon, setHasWon] = useState(false);
  const gameStart = e => {
    setPress(e);
  };

  const submitHandle = e => {
    if (e.key === 'Enter') {
      setPlayer(e);
      setPress(press + 1);
    } else {
      setPlayer(e);
      setPress(press + 1);
    }
  };

  let counter = null;

  const countFromChild = e => {
    counter = e;
    if (counter % 2 === 0) {
      setPlayerObject(prevState => [
        ...prevState,
        <PlayerDiv className="slide-in-left color-change-5x">
          <PlayerName>{player.user1}</PlayerName> Naughts | Move: {counter}
        </PlayerDiv>,
      ]);
    } else {
      setPlayerObject(prevState => [
        ...prevState,
        <PlayerDiv className="slide-in-left color-change-5x">
          <PlayerName>{player.user2}</PlayerName> Crosses | Move: {counter}
        </PlayerDiv>,
      ]);
    }
  };

  const won = e => {
    setHasWon(e);
    setPlayerObject([]);
  };

  if (trackerRef.current) {
    scoreHeight = scoreTitle.current.clientHeight;
    trackerHeight = trackerRef.current.clientHeight - scoreHeight;
  }

  useEffect(() => {}, [press, player, counter, playerObject, hasWon]);

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
      <FlexDiv>
        <TrackerHolder ref={trackerRef}>
          <TrackerTitle className="slide-in-left" ref={scoreTitle}>
            Scoreboard
          </TrackerTitle>
          {playerObject}
        </TrackerHolder>
        <AppWrapper>
          <Board clickCounter={countFromChild} winChecker={won} />
        </AppWrapper>
      </FlexDiv>
    ));

  return <>{selection}</>;
}
export default App;
