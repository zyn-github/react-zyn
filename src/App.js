import './App.css';
import logo from './logo.svg';
import BaseLanguage from './Base/index.js';

import React, { Component } from 'react' // 解构写法

class App extends Component {
    render() {
        return (
            <div className="app-home">
              <img className="app-logo" src={logo} />
              <BaseLanguage />
            </div>
        )
    }
}
export default App;