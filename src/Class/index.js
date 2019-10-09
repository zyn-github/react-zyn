import React, { Component } from 'react';
import classNames from 'classnames';
// classNames 绑定class使用
const style = { color: 'red' };
class MtClassName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: true,
            isPressed: true,
            isHovered: true
        };
    }

    render() {
        const btnClass = classNames({
            'border': this.state.flag,
            'btn': this.state.flag,
            'btn-pressed': this.state.isPressed,
            'btn-over': this.state.isHovered,
        });
        return (
            <p style={style} className={btnClass}>classNames 用法</p>
        )
    }
}
export default MtClassName;