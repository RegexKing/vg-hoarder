import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    height: 265
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const GameCard = props => {
  const gameInfo = props.gameInfo;

  const classes=useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography color="textSecondary" variant="h5" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="body2">
          ESRB Rating: {props.esrb}
        </Typography>
        <Typography variant="body1">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );

}

export default GameCard;
