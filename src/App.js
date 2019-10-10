import './App.css';
import logo from './logo.svg';
import BaseLanguage from './Base/index.js';
import PropTypes from 'prop-types';
import React, { Component } from 'react' // 解构写法

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            miu: 'yellow',
            getChildColor: 'yellow'
        }
    }


    static childContextTypes = {
        color: PropTypes.string,
        kk: PropTypes.string,
        handleItemApp: PropTypes.func
    };
    getChildContext() {
        return {
            color: this.state.miu,
            kk: 'ko',
            handleItemApp: (v) => this.AppTest(v)
        };
    }
    render() {
        return (
            <div className="app-home">
	            <section className="border">
	            	<p>父组件 APP</p>
	            	<div>
	            		<p>Flow背景颜色是： {this.state.getChildColor}</p>
						<button onClick={()=>this.xx()}>跨组件更新颜色</button>
	            	</div>
	            </section>	
	             <div className="border">
	             	<p>子组件 Base</p>
	             	<img className="app-logo" src={logo} />
	              	<BaseLanguage />
	             </div>
            </div>
        )
    }

    getColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
        return color.toString();
    }

    xx() {
        this.setState({ miu: this.getColor() })
    }

    AppTest(v) {
    	this.setState({getChildColor: v});
        console.log('App:', v);

    }
}
export default App;