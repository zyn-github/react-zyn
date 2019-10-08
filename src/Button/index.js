import React, { Component } from 'react';
import './index.css';

// button 按钮组件

class MtButton extends Component {
    constructor(props) {
        super(props);
        this.state = {flag: true}; // 相当于Vue data
    }

    static defaultProps = { // 静态属性  相当于 Vue Props
        color: 'blue',
        text: 'Confirm'
    };

    render() {
        const { color, text } = this.props;
        return (
            <button className={`btn btn-${color}`} disabled={this.state.flag}>
                <em>{text}</em> 
            </button>
        )
    }
}
export default MtButton;