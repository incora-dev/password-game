import React from 'react';
import { pure } from 'recompose';
import './PasswordInput.scss';

interface PasswordInputProps {
  displayedValue: string,
  handleInput: (value: any) => void,
  guessPassword: (value: any) => void,
}

const PasswordInput = ({ displayedValue, handleInput, guessPassword }: PasswordInputProps) => {

  return (
    <div className='password-input-wrapper'>
      <h1>Password breaking game</h1>
      <input type="text" className='numbers-input' value={displayedValue} onKeyDown={handleInput} />
      <button  onClick={guessPassword}>Guess</button>
    </div>
  );
}

export default pure(PasswordInput);