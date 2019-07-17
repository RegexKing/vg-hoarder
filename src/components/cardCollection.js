import React from 'react';
import Grid from '@material-ui/core/Grid';
import GameCard from './gameCard';
import styles from './cardCollection.module.css';



const CardCollection = props => {

  const cards = props.cards;

  return (
    <div className={styles.CardCollection}>
    <Grid container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      spacing={2}
      >
    {cards.map(
      card => (
        <Grid item>
        <GameCard title={card.name} esrb={card.age_ratings} description={card.summary} />
        </Grid>
      )
    )}
    </Grid>
    </div>
  );
}

export default CardCollection;
