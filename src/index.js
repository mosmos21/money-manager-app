import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import MoneyManagerApp from "./containers/MoneyManagerApp";

ReactDOM.render(<MoneyManagerApp />, document.getElementById('root'));
registerServiceWorker();
