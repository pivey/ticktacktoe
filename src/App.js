import React from 'react';
import './App.css';
import styled from 'styled-components';
import Board from './components/Board';
import Square from './components/Square';

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
`;

function App() {
  return (
    <AppWrapper>
      <Board />
    </AppWrapper>
  );
}

export default App;
