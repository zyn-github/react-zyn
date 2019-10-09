import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MtDom extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>react 操作dom</div>
        )
    }

    componentDidMount() {
        // 组件挂载之后可以获取Dom
        // this 􏲗􏾢􏱩组件的实􏶽 可以通过js 操作dom
        const dom = ReactDOM.findDOMNode(this);
        console.log(dom, 'componentDidMount');
        dom.setAttribute('class', 'OK');

    }
    componentDidUpdate() {
        // 组件更新完成账户
        // this 􏲗􏾢􏱩组件的实􏶽 可以通过js 操作dom
        const dom = ReactDOM.findDOMNode(this);
        console.log(dom, 'componentDidUpdate');
    }
}
export default MtDom;