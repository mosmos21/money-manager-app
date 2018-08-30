import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    padding: 25
  },
  title: {
    fontSize: 20
  }
};

const BudgetForm = props => {
  const {classes, year, month, handleInput, setBudget} = props;
  return (
    <div className={classes.root}>
      <Typography className={classes.title} color="textSecondary">
        {year}年 {month}月の予算を設定します
      </Typography>
      <TextField
        type="number"
        name="foodInput"
        label="食費"
        onChange={handleInput}
        margin="normal"/>
      <TextField
        type="number"
        name="sundryInput"
        label="雑費"
        onChange={handleInput}
        margin="normal"/>
      <TextField
        type="number"
        name="relationshipInput"
        label="交際費"
        onChange={handleInput}
        margin="normal"/>
      <TextField
        type="number"
        name="entertainmentInput"
        label="娯楽費"
        onChange={handleInput}
        margin="normal"/>
      <TextField
        type="number"
        name="otherInput"
        label="その他"
        onChange={handleInput}
        margin="normal"/>
      <Button variant="contained" color="primary" onClick={() => setBudget()}>
        予算を登録する
      </Button>
    </div>
  );
};
export default withStyles(styles)(BudgetForm);
