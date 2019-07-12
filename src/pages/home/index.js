import React from 'react';

import CardCollection from '../../components/cardCollection';
import {GAMES} from '../../testData/gameInfo';
import axios from 'axios';

class Home extends React.Component {

defaultGames = GAMES;

state = {
  gameObjects: this.defaultGames
}

/*
componentDidMount() {
  axios({
    url: `${'https://cors-anywhere.herokuapp.com/'}https://api-v3.igdb.com/games`,
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'user-key': '4d2efe9ea0c777e2b93f8c0827920da0'
    },
    data: `fields name, age_ratings, summary; search "Assassins Creed"; where version_parent = null;`

  })
    .then(response => {
      const gameObjects = response.data;
      this.setState({gameObjects});
    })
    .catch(err => {
        console.error(err);
    });

}
*/

  render() {
    return (
      <div>
      <CardCollection cards={this.state.gameObjects} />
      </div>
    );
  }
}

export default Home;
