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
  border: 0.5px solid white;
  height: 33.333%;
  width: 33.333%;
  &:hover {
    cursor: pointer;
    border: 5px dashed #d60361;
    opacity: 0.8;
  }
  &.Naught {
    ${backgroundProvider(naught)}
    pointer-events: none;
  }
  &.Cross {
    ${backgroundProvider(cross)}
    pointer-events: none;
  }
  &.fade-in {
    -webkit-animation: fade-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: fade-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
`;

const Square = props => <Block onClick={props.click} id={props.identity} />;

export default Square;
