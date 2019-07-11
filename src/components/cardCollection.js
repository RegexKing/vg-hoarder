import React from 'react';

const CardCollection = props => {

  const cards = props.cards;

  return (
    <div>
    {
      cards.forEach((card) => {
      return ({card});
    })}
    </div>
  );
}

export default CardCollection;
