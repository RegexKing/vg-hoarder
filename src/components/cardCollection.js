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
        <GameCard title={card.name} esrb={card.age_ratings} description={card.summary} />
        </Grid>
      )
    )}
    </Grid>
    </div>
  );
}

export default CardCollection;
