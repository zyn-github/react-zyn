import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MtChild from './child.js';

class MtDom extends Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
        return (
            <div onClick={this.addfn.bind(this)} className="border">
                <p>react 操作dom {this.state.count}</p>
                <section>
                    <MtChild ref="myChild"></MtChild>
                </section>
            </div>
        )
    }

    addfn() {
        this.setState({count: this.state.count ++ });
    }

    componentDidMount() {
        // 组件挂载之后可以获取Dom
        // this 􏲗􏾢􏱩组件的实􏶽 可以通过js 操作dom
        const dom = ReactDOM.findDOMNode(this); // 获取当前组件DOM
        // dom.setAttribute('class', 'OK');
        const child = ReactDOM.findDOMNode(this.refs.myChild);
        console.log(child); // 获取子组件DOM
        console.log(dom); // 获取当前组件DOM

    }
    componentDidUpdate() {
        // 组件更新完成账户
        // this 􏲗􏾢􏱩组件的实􏶽 可以通过js 操作dom
        const dom = ReactDOM.findDOMNode(this);
        console.log(dom, 'componentDidUpdate');
        dom.setAttribute('class', 'upDate');
    }
}
export default MtDom;