import React from 'react';

import './guess-list.css';

export default function GuessList(props) {
  const guesses = props.guesses.map(function(guess, index) {
    return <li key={index}>{guess}</li>
  })

  return (
    <ul id="guessList" className="guessBox clearfix">
      {guesses}
    </ul>
  );
}
