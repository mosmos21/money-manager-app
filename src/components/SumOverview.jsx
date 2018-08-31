import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import {loadCSS} from 'fg-loadcss/src/loadCSS';
import blue from '@material-ui/core/colors/blue';

const styles = theme => ({
  title: {
    fontSize: 20,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: '2.4em',
    height: '7vw',
  },
  iconHover: {
    marginTop: theme.spacing.unit * 6,
    marginRight: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    '&:hover': {
      color: blue[800],
    },
  },
});

class SumOverview extends React.Component {
  componentDidMount() {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#insertion-point-jss'),
    );
  }

  render() {
    const {classes, year, month, moveMonth, budgetSum, performanceSum} = this.props;
    return (
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <tr>
              <td onClick={() => moveMonth(-1)}>
                <Icon className={classNames(classes.iconHover, 'fas fa-angle-left')}/>
              </td>
              <td>
                <Typography valiant="title" color="inherit" className={classes.title}>
                  {year}年{month}月
                </Typography>
              </td>
              <td onClick={() => moveMonth(1)}>
                <Icon className={classNames(classes.iconHover, 'fas fa-angle-right')}/>
              </td>
            </tr>
          </Paper>
        </Grid>
        <Grid item sm={6}>
          <Paper className={classes.paper}>
            <Typography valiant="title" color="inherit" style={{fontSize: '0.9em'}}>
              残高
            </Typography>
            {budgetSum ? `${budgetSum - performanceSum}円` : '[予算未登録]'}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography valiant="title" color="inherit" style={{fontSize: '0.9em'}}>
              予算額
            </Typography>
            {budgetSum ? `${budgetSum}円` : '[予算未登録]'}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography valiant="title" color="inherit" style={{fontSize: '0.9em'}}>
              実績額
            </Typography>
            {budgetSum ? `${performanceSum}円` : '[予算未登録]'}
          </Paper>
        </Grid>
      </Grid>
    );
  };
}

export default withStyles(styles)(SumOverview);