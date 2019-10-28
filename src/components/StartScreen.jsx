import React from 'react';
import styled from 'styled-components';
import globals from '../globals';

const { flex, noSelect } = globals;

const StartBtn = styled.div`
  ${flex('center', 'center')}
  ${noSelect}
  background: green;
  height: 4rem;
  width: 10rem;
  font-size: 2rem;
  border-radius: 20px;
  color: black;
  :focus {
    outline: none;
  }
  :hover {
    background: green;
    color: white;
    border: 4px solid white;
  }
`;

const StartScreen = ({ text, clickHandle }) => {
  const peter = 'tired';
  return <StartBtn onClick={clickHandle}>{text}</StartBtn>;
};

export default StartScreen;