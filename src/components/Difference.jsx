import React from 'react';
import {Bar} from 'react-chartjs-2';

const keys = ['food', 'sundry', 'relationship', 'entertainment', 'other'];
const createData = data => ({
  labels: ['食費', '雑費', '交際費', '娯楽費', 'その他'],
  datasets: [
    {
      label: '予算',
      backgroundColor: '#74b9ff',
      borderColor: '#0984e3',
      borderWidth: 1,
      hoverBackgroundColor: '#74b9ff',
      hoverBorderColor: '#0984e3',
      data: keys.map(key => data['budget'][key])
    },
    {
      label: '実績',
      backgroundColor: '#ff7675',
      borderColor: '#d63031',
      borderWidth: 1,
      hoverBackgroundColor: '#ff7675',
      hoverBorderColor: '#d63031',
      data: keys.map(key => data['performances']
        .filter(d => d.category === key)
        .map(d => d.performance)
        .reduce((sum, d) => sum + d, 0))
    },
  ]
});

const options = {
  title: {
    display: true,
    text: '予実の差',
    fontSize: 18
  },
  scales: {
    yAxes: [{ticks: { min: 0}}]
  }
};

const Difference = props => <Bar data={createData(props.data)} options={options}/>;
export default Difference;