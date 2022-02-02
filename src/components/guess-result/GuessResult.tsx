import React from 'react';
import { pure } from 'recompose';
import './GuessResult.scss';

interface GuessResultProps {
  numbersGuessed: boolean[],
  tries: number,
  playerWon: boolean,
  startNewGame: () => void,
}

const GuessResult = ({ numbersGuessed, tries, playerWon, startNewGame }: GuessResultProps) => {

  const NumberDot = ({ dotIsGuessed }: any) => (
    <div className={`dot dot${dotIsGuessed ? '-guessed' : ''}`} />
  );

  const RenderCongratulations = () => {
    return (
      <div className='congrats-wrapper'>
        <span className='title'>Congratulations, you won!</span>
        <span className='subtitle'>Tries spent: {tries}</span>
        <button className='new-game-button' onClick={startNewGame}>New game</button>
      </div>
    )
  };

  return (
    <div className='guess-wrapper'>
      {!!playerWon ? RenderCongratulations() : numbersGuessed?.map((number, index) => (
        <NumberDot key={index} dotIsGuessed={!!number}  />
      ))}
    </div>
  );
}

export default pure(GuessResult);