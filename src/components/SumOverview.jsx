import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const SumOverview = props => {
  const { classes, year, month, budgetSum, performanceSum} = props;
  return (
    <Grid container spacing={8}>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography valiant="title" color="inherit">
            {year}年<br/>
            {month}月
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography valiant="title" color="inherit">
            予実の差
          </Typography>
          {budgetSum - performanceSum}円
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography valiant="title" color="inherit">
            予算額
          </Typography>
          {budgetSum}円
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography valiant="title" color="inherit">
            実績額
          </Typography>
          {performanceSum}円
        </Paper>
      </Grid>
    </Grid>
  );
};
export default withStyles(styles)(SumOverview);