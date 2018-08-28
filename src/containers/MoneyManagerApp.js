import React from 'react';
import Header from "../components/Header";
import './MoneyManagerApp.css';
import OverViewSelector from "../components/OverviewSelector";
import BudgetForm from "../components/BudgetForm";
import PerformanceForm from "../components/PerformanceForm";
import Overview from "../components/Overview";

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

      data: {
        // 検証用
        "201808" : {
          'budget': {
            'food': 30000,
            'sundry': 5000,
            'relationship': 20000,
            'entertainment': 30000,
            'other': 15000,
          },
          'performances': []
        }
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSelectDate = this.handleSelectDate.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setBudget = this.setBudget.bind(this);
    this.addPerformance = this.addPerformance.bind(this);
  }
  
  getKey() {
    return `${this.state.year}${('0' + this.state.month).slice(-2)}`;
  }

  isSetBudget() {
    const key = this.getKey();
    return !this.state.data[key];
  }

  handleInput(e) {
    this.setState({ [e.target.name] : e.target.value });
  }

  handleSelectDate(date) {
    this.setState({ dateInput: date.format('YYYY/MM/DD')});
  }

  handleClick(e) {
    console.log(e);
  }

  setBudget() {
    const key = this.getKey();
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        [key] : {
          'budget': {
            'food': this.state.foodInput,
            'sundry': this.state.sundryInput,
            'relationship': this.state.relationshipInput,
            'entertainment': this.state.entertainmentInput,
            'other': this.state.otherInput,
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
      data : {
        [key] : {
          'budget' : {
            ...prevState.data[key]['budget'],
          },
          'performances': prevState.data[key]['performances'].concat({
            'date': this.state.dateInput,
            'category' : this.state.categoryInput,
            'performance': Number(this.state.performanceInput)
          })
        }
      },
      dateInput : '',
      categoryInput: '',
      performanceInput: 0
    }));
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        <div className="container">
          <div className="sideBar">
            { this.isSetBudget() ?
              <BudgetForm
                year={this.state.year}
                month={this.state.month}
                handleInput={this.handleInput}
                setBudget={this.setBudget} /> :
              <PerformanceForm
                year={this.state.year}
                month={this.state.month}
                dateInput={this.state.dateInput}
                categoryInput={this.state.categoryInput}
                performanceInput={this.state.performanceInput}
                handleInput={this.handleInput}
                handleSelectDate={this.handleSelectDate}
                addPerformance={this.addPerformance} /> }
          </div>
          <div className="overview">
            <div className="overviewHeader">
              <OverViewSelector year={this.state.year} month={this.state.month} />
            </div>
            <div className="overviewContent">
              <Overview
                year={this.state.year}
                month={this.state.month}
                data={this.state.data[this.getKey()]}

              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}