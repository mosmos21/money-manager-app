import React from 'react';
import Header from "../components/Header";
import './MoneyManagerApp.css';
import OverViewSelector from "../components/OverviewSelector";

export default class MoneyManagerApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'input' : {
        // 予算入力
        'food': 0,
        'sundry': 0,
        'relationship': 0,
        'entertainment': 0,
        'other': 0,
        // 実績入力
        'date': '',
        'category': '',
        'performance': 0,
      },
      'data': { },
      'year': 2018,
      'month': 8
    };
    this.handleInput = this.handleInput.bind(this);
  }

  isSetBudget() {
    const key = `${this.state.year}${('0' + this.state.month).slice(-2)}`;
    return !!this.state.date[key];
  }

  handleInput(e) {
    console.log(e);
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        <div className="container">
          <div className="sideBar">
            
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