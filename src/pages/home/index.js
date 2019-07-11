import React from 'react';

import CardCollection from '../../components/cardCollection';
import {GAMES} from '../../testData/gameInfo';

const Home = props => {

const gameObjects = GAMES;

  return (
    <div>
    <CardCollection cards={gameObjects} />
    </div>
  );
}

export default Home;
