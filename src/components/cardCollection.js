import React from 'react';
import Grid from '@material-ui/core/Grid';
import GameCard from './gameCard';
import styles from './cardCollection.module.css';

const CardCollection = props => {

  const cards = props.cards;

  return (
    <div className={styles.CardCollection}>
    <Grid container spacing={2}>
    {cards.map(
      card => (
        <Grid item xs={12} sm={3}>
        <GameCard title={card.title} esrb={card.esrb} description={card.description} />
        </Grid>
      )
    )}
    </Grid>
    </div>
  );
}

export default CardCollection;
