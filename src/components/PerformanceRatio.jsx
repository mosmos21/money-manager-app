import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const keys = ['food', 'sundry', 'relationship', 'entertainment', 'other'];
const createData = data => ({
  labels: [ '食費', '雑費', '交際費', '娯楽費', 'その他' ],
  datasets: [{
    data: keys.map(key => data
      .filter(d => d.category === key)
      .map(d => d.performance)
      .reduce((sum, d) => sum + d, 0)),
    backgroundColor: [ '#ff7675', '#55efc4', '#74b9ff', '#ffeaa7', '#b2bec3' ],
    hoverBackgroundColor: [ '#d63031', '#00b894', '#0984e3', '#fdcb6e', '#b2bec3' ],
  }]
});

const options ={
  title: {
    display: true,
    text: '実績内訳',
    fontSize: 18
  },
};

const PerformanceRatio = props =>
    !props.data || props.data.length === 0 ?
        <div>[実績未登録]</div> :
        <Doughnut data={createData(props.data)} options={options} />;
export default PerformanceRatio;