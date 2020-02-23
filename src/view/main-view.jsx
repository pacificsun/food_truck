import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import FoodTrucks from '../components/food-truck-card/food-truck-card.container';
import GoogleMap from '../components/google-map/google-map';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
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

export default function ManinView() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Grid container={true}>
          <Grid item sm={8}>
            <FoodTrucks />
          </Grid>
          <Grid item sm={4}>
            {/* <Typography
              component="div"
              style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
            /> */}
            <div
              style={{ position: 'relative', height: '100vh', marginTop: 20 }}
            >
              <GoogleMap />
            </div>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
