import React from 'react';
import styled from 'styled-components';
import globals from '../globals';
import naught from '../assets/naught.png';
import cross from '../assets/cross.svg';

const { backgroundProvider, noselect, flex } = globals;

const Block = styled.div`
  ${noselect}
  ${flex('center', 'center')}
  background: transparent;
  border: 0.5px solid black;
  height: 33.333%;
  width: 33.333%;
  &:hover {
    cursor: pointer;
    border: 3px solid red;
  }
  &.Naught {
    ${backgroundProvider(naught)}
  }
  &.Cross {
    ${backgroundProvider(cross)}
  }
`;

const Square = props => <Block onClick={props.click} id={props.identity} />;

export default Square;
