import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
  labels: [ '食費', '雑費', '交際費', '娯楽費', 'その他' ],
  datasets: [{
    data: [100, 200, 300, 400, 500],
    backgroundColor: [ '#ff7675', '#55efc4', '#74b9ff', '#ffeaa7', '#b2bec3' ],
    hoverBackgroundColor: [ '#d63031', '#00b894', '#0984e3', '#fdcb6e', '#b2bec3' ],
  }]
};

const options ={
  title: {
    display: true,
    text: '実績内訳',
    fontSize: 18
  },
};

const PerformanceRatio = () => <Doughnut data={data} options={options} height={110} />;
export default PerformanceRatio;