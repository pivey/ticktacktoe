import React, { useState } from 'react';
import styled from 'styled-components';
import globals from '../globals';

const { flex, fadeIn, noSelect } = globals;

const Description = styled.div`
  ${noSelect}
  color: white;
  font-weight: bold;
  margin-bottom: 2rem;
  animation: ${fadeIn} ease 0.4s;
`;

const InputMother = styled.form`
  ${flex('center', 'center', 'column')}
  height: 22rem;
  width: 22rem;
  background: transparent;
`;

const NameInput = styled.input`
  width: 70%;
  text-align: center;
  font-size: 1.2rem;
  background: #bfd0e0;
  color: black;
  padding: 0.8rem 2.5rem;
  border-width: 3px;
  border-color: transparent;
  border-radius: 2px;
  border-style: solid;
  font-weight: bold;
  margin-bottom: 2rem;
  &:focus {
    color: #d60361;
    border-color: #d60361;
    background: white;
  }
  ::placeholder {
    color: black;
    opacity: 0.4;
  }
`;

const SubmitBtn = styled.input`
  color: white;
  background: #034732;
  border-width: 2px;
  border-color: transparent;
  border-style: solid;
  border-radius: 5px;
  text-align: center;
  width: 5rem;
  padding: 0.8rem 0rem;
  animation: ${fadeIn} ease 0.4s;
  &:hover {
    color: #d60361;
    border: 2px solid #d60361;
    cursor: pointer;
  }
`;

const PlayerInput = props => {
  const [user, setUser] = useState({
    user1: '',
    user2: '',
  });

  const pattern = /^([\w\d]{0,10})$/g;

  const valueHandler = ({ target: { name, value } }) => {
    if (value.match(pattern)[0]) {
      setUser({ ...user, [name]: value });
    } else {
      alert('only letters or numbers. Max 10 characters');
    }
  };

  return (
    <>
      <InputMother>
        <Description>Enter your player names</Description>

        <NameInput
          placeholder="Player 1" //
          className="scale-in-center" //
          type="text" //
          spellcheck="false" //
          Required //
          name="user1"
          autoComplete="off"
          value={user.user1}
          onChange={valueHandler}
        />
        <NameInput
          placeholder="Player 2" //
          className="scale-in-center" //
          type="text" //
          spellcheck="false" //
          Required //
          name="user2"
          autoComplete="off"
          value={user.user2}
          onChange={valueHandler}
        />
        <SubmitBtn type="submit" onClick={() => props.submit(user)} value="Submit" />
      </InputMother>
    </>
  );
};

export default PlayerInput;
