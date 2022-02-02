import React, { useEffect, useState } from 'react';
import GuessResult from '../components/guess-result/GuessResult';
import PasswordInput from '../components/password-input/PasswordInput';
import './Home.scss'

const PASSWORD_LENGTH = 4;

export const HomePage = () => {
  const [password, setPassword] = useState('');
  const [valueToDisplay, setValueToDisplay] = useState('');
  const [numbersGuessed, setNumbersGuessed] = useState([false, false, false, false]);
  const [playerWon, setPlayerWon] = useState(false);
  const [currentTries, setCurrentTries] = useState(0);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    setValueToDisplay('');
    genereteNewPassword();
    setPlayerWon(false);
    setNumbersGuessed([false, false, false, false]);
    setCurrentTries(0);
  };

  const genereteNewPassword = () => {
    setPassword(Math.floor(1000 + Math.random() * 9000).toString());
  }

  const handleInput = ({ key }: KeyboardEvent) => {
    if (!!key && !isNaN(Number(key)) && valueToDisplay?.length < PASSWORD_LENGTH) {
      setValueToDisplay(`${valueToDisplay}${key.toString()}`);
    } else {
      if (key === 'Backspace') {
        setValueToDisplay(valueToDisplay?.slice(0, -1));
      }
      if (key === 'Enter' && valueToDisplay?.length === PASSWORD_LENGTH) {
        guessPassword();
      }
    }
  }

  const guessPassword = () => {
    if (valueToDisplay === password) {
      setCurrentTries(currentTries + 1);
      return setPlayerWon(true);
    }
    setNumbersGuessed(numbersGuessed?.map((item, index) => valueToDisplay[index] === password[index]));
    setCurrentTries(currentTries + 1);
  }

  return <div className='app-wrapper'>
    <PasswordInput displayedValue={valueToDisplay} handleInput={handleInput} guessPassword={guessPassword} />
    <GuessResult numbersGuessed={numbersGuessed} tries={currentTries} playerWon={playerWon} startNewGame={startNewGame} />
  </div>
}
