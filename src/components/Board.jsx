/* eslint-disable no-unused-expressions */
import React from 'react';
import styled from 'styled-components';
import Square from './Square';

const Box = styled.div`
  height: 30rem;
  width: 30rem;
  display: flex;
  flex-wrap: wrap;
  border: 2px solid white;
`;

let count = 1;
const initState = [];
for (let j = 0; j < 9; j++) {
  initState.push(0);
}

const winningScenarios = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let Naught = [];
let Cross = [];

const Board = props => {
  let won = false;
  const clickHandle = e => {
    props.clickCounter(count);
    const checker = (arr, target) => target.every(v => arr.includes(v));
    const resetter = () => {
      won = true;
      count = 0;
    };

    if (e.target.className.split(' ').length < 3) {
      if (count % 2 === 0) {
        e.target.classList.add('fade-in');
        e.target.classList.add('Naught');
        Naught.push(+e.target.id);
      } else {
        e.target.classList.add('fade-in');
        e.target.classList.add('Cross');
        Cross.push(+e.target.id);
      }
      setTimeout(() => {
        if (won === false) {
          for (let i = 0; i < 8; i++) {
            if (count === 9 && !won) {
              alert('The game ended in a draw');
              resetter();
            } else if (checker(Naught, winningScenarios[i])) {
              alert('Naughts wins');
              resetter();
            } else if (checker(Cross, winningScenarios[i])) {
              alert('Crosses wins');
              resetter();
            }
          }
          // ? setscore(prevState => [...prevState], (score[e.target.id] = targetClass));
          count += 1;
        }
        if (won === true) {
          props.winChecker(won);
          const boarrd = document.querySelector('.Cross').parentElement.children;
          for (let i = 0; i < boarrd.length; i++) {
            const classNames = `${boarrd[i].className.split(' ')[0]} ${boarrd[i].className.split(' ')[1]}`;
            boarrd[i].className = classNames;
          }
          Naught = [];
          Cross = [];
          won = false;
        }
      }, 200);
    }
  };

  return (
    <Box className="fade-in-fwd">
      {initState.map((e, i) => (
        <Square key={i} identity={i} click={clickHandle} />
      ))}
    </Box>
  );
};

export default Board;
