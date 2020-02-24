import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import PizzaImg from '../../assets/images/pizza.jpg';
import { Pagination } from '@material-ui/lab';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: 20,
    margin: 20
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  content: {
    flex: '1 0 auto',
    width: '100%'
  },
  cover: {
    width: 151
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

const FoodTruck = props => {
  const classes = useStyles();
  const { applicant, fooditems, address } = props;
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.cover} image={PizzaImg} title="pic" />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {applicant}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {address}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {fooditems}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Rating
          </Typography>
        </CardContent>
      </div>
      {/* <Pagination count={10} variant="outlined" shape="rounded" /> */}
    </Card>
  );
};

export default FoodTruck;
