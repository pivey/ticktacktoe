import React from 'react';
import './styles/App.css';
import styled from 'styled-components';
import Board from './components/Board';

const AppWrapper = styled.div`
  background-color: lightBlue;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppWrapper>
      <Board />
    </AppWrapper>
  );
}

export default App;
