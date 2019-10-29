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

const InputMother = styled.div`
  ${flex('center', 'center', 'column')}
  height: 15rem;
  width: 15rem;
  background: transparent;
`;

const NameInput = styled.input`
  width: 70%;
  text-align: center;
  font-size: 18px;
  padding: 0.8rem 2.5rem;
  border-width: 2px;
  border-color: black;
  border-style: solid;
  font-weight: bold;
  margin-bottom: 2rem;
  &:focus {
    color: black;
    background: pink;
  }
`;

const SubmitBtn = styled.button`
  color: black;
  background: green;
  font-size: 12px;
  padding: 0.8rem 2.5rem;
  border-width: 2px;
  border-color: black;
  border-style: solid;
  border-radius: 5px;
  text-align: center;
  height: 8rem;
  width: 8rem;
  animation: ${fadeIn} ease 0.4s;
  &:hover {
    color: white;
    border: 3px solid white;
    cursor: pointer;
  }
`;

const PlayerInput = props => {
  const [user, setUser] = useState({
    user1: '',
    user2: '',
  });

  const valueHandler = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <InputMother>
        <Description>Enter your usernames</Description>
        <NameInput
          placeholder="Player 1" //
          className="scale-in-center" //
          type="text" //
          spellcheck="false" //
          required //
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
          required //
          name="user2"
          autoComplete="off"
          value={user.user2}
          onChange={valueHandler}
        />
        <SubmitBtn type="button" onClick={() => props.submit(user)}>
          Submit
        </SubmitBtn>
      </InputMother>
    </>
  );
};

export default PlayerInput;
