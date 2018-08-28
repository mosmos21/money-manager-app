import React from 'react';
import {Bar} from 'react-chartjs-2';

const getArray = () => Array.from(Array(31), () => Math.floor(Math.random() * Math.floor(700)) + 300);

const data = {
  labels: Array.from(Array(31), (v, k) => k + 1),
  datasets: [
    {
      label: '食費',
      backgroundColor: '#ff7675',
      borderColor: '#d63031',
      borderWidth: 1,
      hoverBackgroundColor: '#ff7675',
      hoverBorderColor: '#d63031',
      data: getArray()
    },
    {
      label: '雑費',
      backgroundColor: '#55efc4',
      borderColor: '#00b894',
      borderWidth: 1,
      hoverBackgroundColor: '#55efc4',
      hoverBorderColor: '#00b894',
      data: getArray()
    },
    {
      label: '交際費',
      backgroundColor: '#74b9ff',
      borderColor: '#0984e3',
      borderWidth: 1,
      hoverBackgroundColor: '#74b9ff',
      hoverBorderColor: '#0984e3',
      data: getArray()
    },
    {
      label: '雑費',
      backgroundColor: '#ffeaa7',
      borderColor: '#fdcb6e',
      borderWidth: 1,
      hoverBackgroundColor: '#ffeaa7',
      hoverBorderColor: '#fdcb6e',
      data: getArray()
    },
    {
      label: 'その他',
      backgroundColor: '#dfe6e9',
      borderColor: '#b2bec3',
      borderWidth: 1,
      hoverBackgroundColor: '#dfe6e9',
      hoverBorderColor: '#b2bec3',
      data: getArray()
    },
  ]
};

const options = {
  title: {
    display: true,
    text: '日別実績詳細',
    fontSize: 18
  },
  scales: {
    xAxes: [{stacked : true}],
    yAxes: [{stacked : true}]
  }
};

const PerformanceDetail = props =>{
  const {handleClick} = props;
  return <Bar data={data} options={options} onClick={handleClick}/>;
};
export default PerformanceDetail;