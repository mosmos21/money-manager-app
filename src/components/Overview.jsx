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
  grid: {
    height: '45%'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const getBudgetSum = data => Object.values(data).reduce((sum, val) => sum + val, 0);
const getPerformanceSum = data => data.map(val => val['performance']).reduce((sum, val) => sum + val, 0);

const Overview = props => {
  const {classes, year, month, data, handleClick} = props;
  return (
    <Grid container spacing={24} className={classes.root}>
      <Grid item lg={6}>
        <Paper className={classes.paper}>
          <SumOverview
            year={year}
            month={month}
            budgetSum={getBudgetSum(data['budget'])}
            performanceSum={getPerformanceSum(data['performances'])}
          />
        </Paper>
      </Grid>
      <Grid item lg={6}>
        <Paper className={classes.paper}>
          <PerformanceRatio/>
        </Paper>
      </Grid>
      <Grid item lg={6}>
        <Paper className={classes.paper}>
          <Difference/>
        </Paper>
      </Grid>
      <Grid item lg={6}>
        <Paper className={classes.paper}>
          <PerformanceDetail handleClick={handleClick}/>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Overview);