import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
  title: {
    fontSize: 20
  }
};

const PerformanceForm = props => {
  const { classes, handleInput, addPerformance } = props;
  return (
    <div>
      <Typography className={classes.title}>
        実績の入力
      </Typography>
      <TextField
        name="performanceInput"
        label="実績額"
        onChange={handleInput}
        margin="normal"/>
      <Button variant="contained" color="primary" onClick={ () => addPerformance() }>
        実績を追加する
      </Button>
    </div>
  );
};

export default withStyles(styles)(PerformanceForm);
