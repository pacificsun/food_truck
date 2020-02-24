import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import FoodTrucksList from '../components/food-truck-list/list.component';
import GoogleMap from '../components/google-map/google-map';

import container from './main-view.container';

function ManinView({ apiData: { data, loading, filterData, query } }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Grid container={true}>
          <Grid item sm={8}>
            <FoodTrucksList
              loading={loading}
              data={query ? filterData : data}
            />
          </Grid>
          <Grid item sm={4}>
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

export default container(ManinView);
