import React from 'react';
import styled from 'styled-components';
import globals from '../globals';

const { flex, noSelect } = globals;

const StartBtn = styled.div`
  ${flex('center', 'center')}
  ${noSelect}
  background: #034732;
  height: 4rem;
  width: 10rem;
  font-size: 2rem;
  border-radius: 20px;
  color: white;
  :focus {
    outline: none;
  }
  :hover {
    color: #d60361;
    border: 4px solid #d60361;
    cursor: pointer;
  }
`;

const StartScreen = ({ text, clickHandle }) => <StartBtn onClick={() => clickHandle(2)}>{text}</StartBtn>;

export default StartScreen;
