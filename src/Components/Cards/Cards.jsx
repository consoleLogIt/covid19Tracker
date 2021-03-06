import React from 'react';
import { Card, CardContent, Typography, Grid, CircularProgress } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

function Cards({ data: { active, confirmed, recovered, deaths, aChanges, cChanges, dChanges, rChanges } }) {
  if (!active) {
    return <CircularProgress />
  }
  return (
    <div className={styles.container}>
      <Grid className = {styles.gridwrap} container spacing={3} justify='space-evenly'  md='auto'>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.active)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Active</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={active} duration={2.5} separator="," />
            </Typography>
            <Typography gutterBottom>{aChanges > 0 && "+"}
            <CountUp start={0} end={aChanges} duration={2.5} separator="," />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.confirmed)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Confirmed</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={confirmed} duration={2.5} separator="," />
            </Typography>
            <Typography gutterBottom>{cChanges > 0 && "+"}
            <CountUp start={0} end={cChanges} duration={2.5} separator="," />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered} duration={2.5} separator="," />
            </Typography>
            <Typography gutterBottom>{rChanges > 0 && "+"}
            <CountUp start={0} end={rChanges} duration={2.5} separator="," />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deceased)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths} duration={2.5} separator="," />
            </Typography>
            <Typography gutterBottom>{dChanges > 0 && "+"}
            <CountUp start={0} end={dChanges} duration={2.5} separator="," />
            </Typography>
          </CardContent>
        </Grid>
      </Grid>

    </div>
  );
}

export default Cards;