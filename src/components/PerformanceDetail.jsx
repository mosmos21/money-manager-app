import React from 'react';
import {Bar} from 'react-chartjs-2';

import moment from 'moment';

const createLabels = (year, month) => Array.from(
  Array(moment({year: year + month / 12, month: month % 12, date: 1}).subtract(1, 'd').date()),
  (v, k) => k + 1);

const keys = ['food', 'sundry', 'relationship', 'entertainment', 'other'];
const values = {
  'food': {'label': '食費', 'backgroundColor': '#ff7675', 'borderColor': '#d63031'},
  'sundry': {'label': '雑費', 'backgroundColor': '#55efc4', 'borderColor': '#00b894'},
  'relationship': {'label': '交際費', 'backgroundColor': '#74b9ff', 'borderColor': '#0984e3'},
  'entertainment': {'label': '娯楽費', 'backgroundColor': '#ffeaa7', 'borderColor': '#fdcb6e'},
  'other': {'label': 'その他', 'backgroundColor': '#dfe6e9', 'borderColor': '#b2bec3'}
};

const createData = (year, month, data) => ({
  labels: createLabels(year, month),
  datasets: keys.map(key => ({
    label: values[key]['label'],
    backgroundColor: values[key]['backgroundColor'],
    borderColor: values[key]['borderColor'],
    borderWidth: 1,
    hoverBackgroundColor: values[key]['backgroundColor'],
    hoverBorderColor: values[key]['borderColor'],
    data: createLabels(year, month).map(date => data
      .filter(d => d.category === key)
      .filter(d => d.date === `${year}/${('0' + month).slice(-2)}/${('0' + date).slice(-2)}`)
      .reduce((sum, row) => sum + row.performance, 0))
  })),
});

const options = {
  title: {
    display: true,
    text: '日別実績詳細',
    fontSize: 18
  },
  scales: {
    xAxes: [{stacked: true}],
    yAxes: [{stacked: true}]
  }
};

const PerformanceDetail = props => {
  const {year, month, data, handleClick} = props;
  return <Bar data={createData(year, month, data)} options={options} onClick={handleClick}/>;
};
export default PerformanceDetail;