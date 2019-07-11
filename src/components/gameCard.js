import React from 'react';

const GameCard = props => {
  const gameInfo = props.gameInfo;

  return (
    <div className={props.classStyle}>
    {props.title}
    </div>
  );

}

export default GameCard;
