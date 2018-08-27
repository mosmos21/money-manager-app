import React from 'react';
import Header from "../components/Header";
import './MoneyManagerApp.css';
import OverViewSelector from "../components/OverviewSelector";
import BudgetForm from "../components/BudgetForm";
import PerformanceForm from "../components/PerformanceForm";

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

      data: { },
    };
    this.handleInput = this.handleInput.bind(this);
    this.setBudget = this.setBudget.bind(this);
  }

  isSetBudget() {
    const key = `${this.state.year}${('0' + this.state.month).slice(-2)}`;
    return !this.state.data[key];
  }

  handleInput(e) {
    this.setState({ [e.target.name] : e.target.value });
  }

  setBudget() {
    const key =`${this.state.year}${('0' + this.state.month).slice(-2)}`;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        [key] : {
          'budget': {

          },
          'performance': []
        },
      }
    }));
  }

  addPerformance() {
    const key =`${this.state.year}${('0' + this.state.month).slice(-2)}`;
    console.log(key);
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
                addPerformanace={this.addPerformance} /> }
          </div>
          <div className="overview">
            <div className="overviewHeader">
              <OverViewSelector year={this.state.year} month={this.state.month} />
            </div>
            <div className="overviewContent">

            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}