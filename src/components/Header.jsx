import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
  button: {
    marginLeft: 20
  }
};

const Header = props => {
  const {classes, reset, setDemoData} = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <ToolBar>
          <Typography valiant="title" color="inherit">
            お小遣い管理アプリ
          </Typography>
          <Button variant="outlined" color="primary" className={classes.button} onClick={reset}>
            リセット
          </Button>
          <Button variant="outlined" color="primary" className={classes.button} onClick={setDemoData}>
            デモデータセット
          </Button>
        </ToolBar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);