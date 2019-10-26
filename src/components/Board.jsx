/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Square from './Square';

const Box = styled.div`
  height: 500px;
  width: 500px;
  display: flex;
  flex-wrap: wrap;
  border: 3px solid black;
`;

let count = 0;
const initState = [];
for (let j = 0; j < 9; j++) {
  initState.push(0);
}

const Board = () => {
  const [scoreKeeper, setScoreKeeper] = useState(initState);
  const clickHandle = e => {
    console.log(e.target.id);

    count % 2 === 0 ? e.target.classList.add('Naught') : e.target.classList.add('Cross');
    const targetClass = e.target.className.split(' ')[2].split('')[0];
    setScoreKeeper(prevState => [...prevState], (scoreKeeper[e.target.id] = targetClass));
    count += 1;
    console.log(scoreKeeper);
  };
  useEffect(() => {
    console.log(scoreKeeper);
  }, [scoreKeeper]);

  return (
    <Box>
      {initState.map((e, i) => (
        <Square key={i} identity={i} click={clickHandle} />
      ))}
    </Box>
  );
};

export default Board;
