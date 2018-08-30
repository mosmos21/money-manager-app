import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
  paper: {
    position: 'absolute',
    top: '30%',
    left: `calc(50% - ${theme.spacing.unit * 25}px)`,
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  table: {
    width: theme.spacing.unit * 50,
  },
});

const getData = (year, month, date, data) => {
  const key = `${year}/${('0' + month).slice(-2)}/${('0' + date).slice(-2)}`;
  return data.filter(d => d.date === key).map((d, idx) => ({...d, id: idx}));
};

const PerformanceDetailList = props => {
  const {classes, year, month, date, open, data, handleClose} = props;
  const categoryValues = {'food': '食費', 'sundry': '雑費', 'relationship': '交際費', 'entertainment': '娯楽費', 'other': 'その他'};
  return (
    <Modal
      open={open}
      onClose={handleClose}>
      <Paper className={classes.paper}>
        <Typography variant="title" id="modal-title">
          {year}/{month}/{date} 実績詳細
        </Typography>
        <Table className={classes.table}>
          <TableHead>
            <TableCell>カテゴリ</TableCell>
            <TableCell>実績額</TableCell>
          </TableHead>
          <TableBody>
            {getData(year, month, date, data['performances']).map(row =>
              <TableRow key={row.id}>
                <TableCell>{categoryValues[row.category]}</TableCell>
                <TableCell numeric>{row.performance}円</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </Modal>
  );
};
export default withStyles(styles)(PerformanceDetailList);