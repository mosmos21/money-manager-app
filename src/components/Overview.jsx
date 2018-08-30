import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SumOverview from "./SumOverview";
import PerformanceRatio from "./PerformanceRatio";
import Difference from "./Difference";
import PerformanceDetail from "./PerformanceDetail";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: '19vw',
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const getBudgetSum = data => Object.values(data).reduce((sum, val) => sum + val, 0);
const getPerformanceSum = data => data.map(val => val['performance']).reduce((sum, val) => sum + val, 0);

const Overview = props => {
  const {classes, year, month, data, moveMonth, handleClick} = props;
  return (
    <Grid container spacing={24} className={classes.root}>
      <Grid item lg={6}>
        <Paper className={classes.paper}>
          <SumOverview
            year={year}
            month={month}
            moveMonth={moveMonth}
            budgetSum={data ? getBudgetSum(data['budget']) : undefined}
            performanceSum={data ? getPerformanceSum(data['performances']) : 0}
          />
        </Paper>
      </Grid>
      <Grid item lg={6}>
        <Paper className={classes.paper}>
          <PerformanceRatio data={data ? data['performances'] : undefined}/>
        </Paper>
      </Grid>
      <Grid item lg={6}>
        <Paper className={classes.paper}>
          <Difference data={data}/>
        </Paper>
      </Grid>
      <Grid item lg={6}>
        <Paper className={classes.paper}>
          <PerformanceDetail
            year={year}
            month={month}
            data={data ? data['performances'] : undefined}
            handleClick={handleClick}/>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Overview);