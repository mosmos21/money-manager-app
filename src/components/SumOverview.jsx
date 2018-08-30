import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  title: {
    fontSize: 22,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const SumOverview = props => {
  const {classes, year, month, budgetSum, performanceSum} = props;
  return (
    <Grid container spacing={8}>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography valiant="title" color="inherit" className={classes.title}>
            {year}年{month}月
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography valiant="title" color="inherit">
            予実の差
          </Typography>
          {budgetSum ? `${budgetSum - performanceSum}円` : '[予算が登録されていません]'}
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography valiant="title" color="inherit">
            予算額
          </Typography>
          {budgetSum ? `${budgetSum}円` : '[予算が登録されていません]'}
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography valiant="title" color="inherit">
            実績額
          </Typography>
          {budgetSum ? `${performanceSum}円` : '[予算が登録されていません]'}
        </Paper>
      </Grid>
    </Grid>
  );
};
export default withStyles(styles)(SumOverview);