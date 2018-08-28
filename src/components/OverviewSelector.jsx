import React from 'react';
import Typography from '@material-ui/core/Typography';

const OverViewSelector = props => (
  <div>
    <Typography valiant="title" color="inherit">
      { props.year }年{ props.month }月 概要
    </Typography>
  </div>
);
export default OverViewSelector;