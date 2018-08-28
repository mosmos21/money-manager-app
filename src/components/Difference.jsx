import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: [ '食費', '雑費', '交際費', '娯楽費', 'その他' ],
  datasets: [
    {
      label: '予算',
      backgroundColor: '#74b9ff',
      borderColor: '#0984e3',
      borderWidth: 1,
      hoverBackgroundColor: '#74b9ff',
      hoverBorderColor: '#0984e3',
      data: [ 10000, 20000, 15000, 25000, 5000 ]
    },
    {
      label: '実績',
      backgroundColor: '#ff7675',
      borderColor: '#d63031',
      borderWidth: 1,
      hoverBackgroundColor: '#ff7675',
      hoverBorderColor: '#d63031',
      data: [ 9000, 15000, 16000, 20000, 3000 ]
    },
  ]
};

const options = {
  title: {
    display: true,
    text: '予実の差',
    fontSize: 18
  },
};

const Difference = () => <Bar data={data} options={options}/>;
export default Difference;