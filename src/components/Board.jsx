import React from 'react';
import styled from 'styled-components';
import Square from './Square';

const Box = styled.div`
  height: 500px;
  width: 500px;
  border: 3px solid red;
  display: flex;
  flex-wrap: wrap;
`;

const Board = () => (
  <Box>
    <Square />
    <Square />
    <Square />
    <Square />
    <Square />
    <Square />
    <Square />
    <Square />
    <Square />
  </Box>
);

export default Board;
