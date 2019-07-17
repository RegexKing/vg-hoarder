import React, {useState, useEffect, memo} from 'react';
import CardCollection from '../../components/cardCollection';
import SideBar from '../../commonControls/sidebar';
import Grid from '@material-ui/core/Grid';
import {GAMES} from '../../testData/gameInfo';
import axios from 'axios';

const Home = memo((props) => {

const [gameObjects, searchGames] = useState(GAMES);
const [term, searchTitle] = useState("Halo");

const submitSearch = (title) => {
  searchTitle(title);
}

/*
useEffect(() => {
  axios({
    url: `${'https://cors-anywhere.herokuapp.com/'}https://api-v3.igdb.com/games`,
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'user-key': '5e5b095d70b09d1ff36757e38f358ebc'
    },
    data: `fields name, age_ratings, summary; search "${term}"; where version_parent = null;`

  })
    .then(response => {
      searchGames(response.data);
    })
    .catch(err => {
        console.error(err);
    });
}, [term]);
*/
  return (
    <Grid container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      spacing={2}
    >
      <Grid item xs={1}>
        <SideBar submitSearch={submitSearch} />
      </Grid>
      <Grid item xs>
        <CardCollection cards={gameObjects} />
      </Grid>
    </Grid>
  );
});

export default Home;
