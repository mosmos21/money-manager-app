import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SumOverview from "./SumOverview";

const styles = theme => ({
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
  const {classes, year, month, data} = props;
  return (
    <Grid container spacing={24}>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <SumOverview
            year={year}
            month={month}
            budgetSum={getBudgetSum(data['budget'])}
            performanceSum={getPerformanceSum(data['performances'])}
          />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography valiant="title" color="inherit">
            実績内訳
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          予実の差
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          日別実績
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Overview);