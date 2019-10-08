import React, { Component } from 'react';

// button 按钮组件

class MtNote extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        {
            /* 我是注释 方法一 */
        } 
        {
            // 我是注释 方法二
            // componentWillMount和componentDidMount这两个生命周期函数，只在页面刷新时执行一次，而render函数是只要有state和props变化就会执行，这个初学者一定要注意。
        }
        return (
            <p>react添加注释写法</p>
        )
    }
}
export default MtNote;