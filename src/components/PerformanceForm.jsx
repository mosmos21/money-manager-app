import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import InputLabel from '@material-ui/core/InputLabel';
import DatePicker from 'react-datepicker';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

const styles = theme => ({
  root: {
    padding: 25
  },
  title: {
    fontSize: 20
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

const PerformanceForm = props => {
  const {classes, year, month, dateInput, categoryInput, performanceInput, handleInput, handleSelectDate, addPerformance} = props;
  const minDate = moment({year: year, month: month - 1, date: 1});
  const maxDate = moment({year: year + month / 12, month: month % 12, date: 1}).subtract(1, 'd');
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        実績の入力
      </Typography>
      <InputLabel htmlFor="dateInput">実績日</InputLabel>
      <DatePicker
        id="dateInput"
        dateFormat="YYYY/MM/DD"
        value={dateInput}
        dropdownMode="select"
        month={month}
        minDate={minDate}
        maxDate={maxDate}
        onChange={handleSelectDate}/>
      
      <InputLabel htmlFor="categoryInput">カテゴリ</InputLabel>
      <RadioGroup
        aria-label="カテゴリ"
        name="categoryInput"
        className={classes.group}
        value={categoryInput}
        onChange={handleInput}>
        <FormControlLabel value="food" control={<Radio/>} label="食費"/>
        <FormControlLabel value="sundry" control={<Radio/>} label="雑費"/>
        <FormControlLabel value="relationship" control={<Radio/>} label="交際費"/>
        <FormControlLabel value="entertainment" control={<Radio/>} label="娯楽費"/>
        <FormControlLabel value="other" control={<Radio/>} label="その他"/>
      </RadioGroup>
      
      <TextField
        type="number"
        name="performanceInput"
        value={performanceInput}
        label="実績額"
        onChange={handleInput}
        margin="normal"/>
      
      <Button variant="contained" color="primary" onClick={() => addPerformance()}>
        実績を追加する
      </Button>
    </div>
  );
};

export default withStyles(styles)(PerformanceForm);
