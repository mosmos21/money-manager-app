import React from 'react';
import Header from "../components/Header";
import BudgetForm from "../components/BudgetForm";
import PerformanceForm from "../components/PerformanceForm";
import Overview from "../components/Overview";

import './MoneyManagerApp.css';
import PerformanceDetailList from "../components/PerformanceDetailList";

const generateDemoData = (year, month) => {
  const randomInt = max => Math.floor(Math.random() * Math.floor(max));
  const categories = ['food', 'sundry', 'relationship', 'entertainment', 'other'];
  const key = `${year}${('0' + month).slice(-2)}`;
  let arr = [], sum = 0;
  while (sum <= 90000) {
    const perf = randomInt(1900) + 100;
    const date = ('0' + (randomInt(31) + 1)).slice(-2);
    sum += perf;
    arr.push({'date': `${year}/${('0' + month).slice(-2)}/${date}`, 'category': categories[randomInt(5)], 'performance': perf});
  }
  return {
    [key]: {
      'budget': {
        'food': 30000,
        'sundry': 5000,
        'relationship': 20000,
        'entertainment': 30000,
        'other': 15000,
      },
      'performances': arr
    }
  }
};

export default class MoneyManagerApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 予算入力
      foodInput: 0,
      sundryInput: 0,
      relationshipInput: 0,
      entertainmentInput: 0,
      otherInput: 0,
      // 実績入力
      dateInput: '',
      categoryInput: '',
      performanceInput: 0,

      // 選択中の年月
      year: 2018,
      month: 8,

      // モーダル用
      open: false,
      date: 0,

      data: {},
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSelectDate = this.handleSelectDate.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.setBudget = this.setBudget.bind(this);
    this.addPerformance = this.addPerformance.bind(this);
    this.reset = this.reset.bind(this);
    this.setDemoData = this.setDemoData.bind(this);
    this.moveMonth = this.moveMonth.bind(this);
  }

  getKey() {
    return `${this.state.year}${('0' + this.state.month).slice(-2)}`;
  }

  isSetBudget() {
    const key = this.getKey();
    return !this.state.data[key];
  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSelectDate(date) {
    this.setState({dateInput: date.format('YYYY/MM/DD')});
  }

  handleClick(e) {
    if (e.length === 0) return;
    this.setState({open: true, date: e[0]._index + 1});
  }
  
  handleClose() {
    this.setState({open: false});
  }

  reset() {
    this.setState({data: {}});
  }

  setDemoData() {
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        ...generateDemoData(this.state.year, this.state.month),
      }
    }));
  }

  setBudget() {
    const key = this.getKey();
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        [key]: {
          'budget': {
            'food': Number(this.state.foodInput),
            'sundry': Number(this.state.sundryInput),
            'relationship': Number(this.state.relationshipInput),
            'entertainment': Number(this.state.entertainmentInput),
            'other': Number(this.state.otherInput),
          },
          'performances': []
        },
      },
      foodInput: 0,
      sundryInput: 0,
      relationshipInput: 0,
      entertainmentInput: 0,
      otherInput: 0,
    }));
  }

  addPerformance() {
    const key = this.getKey();
    this.setState(prevState => ({
      data: {
        [key]: {
          'budget': {
            ...prevState.data[key]['budget'],
          },
          'performances': prevState.data[key]['performances'].concat({
            'date': this.state.dateInput,
            'category': this.state.categoryInput,
            'performance': Number(this.state.performanceInput)
          })
        }
      },
      dateInput: '',
      categoryInput: '',
      performanceInput: 0
    }));
  }

  moveMonth(num) {
    let year = this.state.year;
    let month = this.state.month + num;
    if(month === 0) {
      year--; month = 12;
    }
    if(month === 13) {
      year++; month = 1;
    }
    this.setState({year: year, month: month});
  }

  render() {
    return (
      <React.Fragment>
        <Header reset={this.reset} setDemoData={this.setDemoData}/>
        <div className="container">
          <div className="sideBar">
            {this.isSetBudget() ?
              <BudgetForm
                year={this.state.year}
                month={this.state.month}
                handleInput={this.handleInput}
                setBudget={this.setBudget}/> :
              <PerformanceForm
                year={this.state.year}
                month={this.state.month}
                dateInput={this.state.dateInput}
                categoryInput={this.state.categoryInput}
                performanceInput={this.state.performanceInput}
                handleInput={this.handleInput}
                handleSelectDate={this.handleSelectDate}
                addPerformance={this.addPerformance}/>}
          </div>
          <div className="overview">
            <div className="overviewContent">
              <Overview
                year={this.state.year}
                month={this.state.month}
                data={this.state.data[this.getKey()]}
                moveMonth={this.moveMonth}
                handleClick={this.handleClick}/>
            </div>
          </div>
        </div>
        <PerformanceDetailList
          year={this.state.year}
          month={this.state.month}
          date={this.state.date}
          open={this.state.open}
          data={this.state.data[this.getKey()]}
          handleClose={this.handleClose}
        />
      </React.Fragment>
    );
  }
}