import React from 'react';

import GameCard from '../../components/gameCard';
import CardCollection from '../../components/cardCollection';
import {GAMES} from '../../testData/gameInfo';
import styles from '../../components/gameCard.module.css';

const Home = props => {

const gameObjects = GAMES;

const gameArr = [];

gameObjects.forEach(gameData => gameArr.push(
  (<GameCard title={gameData.title} />)
));


  return (
    <div>
    <GameCard classStyle={styles.GameCard} title="Halo Reach" />
    <GameCard classStyle={styles.GameCard} title="Metroid Other M" />
    </div>
  );
}

export default Home;
