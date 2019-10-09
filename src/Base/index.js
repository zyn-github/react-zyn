import React, { Component } from 'react';

import MtButton from '../Button/index.js';
import MtNote from '../Note/index.js';
import MtHook from '../Hook/index.js';
import MtProps from '../Props/index.js';


class BaseLanguage extends Component {
    constructor(props) {
        super(props);

        this.state = { inputValue: 'kk', list: ['张飞', '刘备'] } // 单向数据流 监听数据
    }

    render() {
        console.log('render---组件挂载中.......')
        // 有state和props变化就会执行
        return (
            <div className="server-bg">
                <section>
                    <MtButton text={`自定义按钮组件`} color={'red'}></MtButton>    
                </section>
                 <section>
                    <MtNote></MtNote>    
                </section>
                <section>
                    <MtHook></MtHook>    
                </section>
                 <section>
                    <MtProps order={`order is isRequired`}></MtProps>    
                </section>
            </div>
        )
    }

    addList() {
        this.setState({ // 修改构造器函数中的 state
            list: [...this.state.list, this.state.inputValue]
        })

    }

    deleteItem(index) {
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({ list: list });
    }

    inputChange(e) {
        console.log(e.target.value);
        // 重新修改 this.state 里面的值
        // this.state.inputValue = e.target.value;  该种计算方式不可以 需要通过 setState来进行改变 监听值的变化

        this.setState({
            inputValue: e.target.value
        });

    }

    componentWillMount() {
        // 页面加载只执行一次
        console.log('componentWillMount----组件将要挂载到页面的时刻')
    }
    componentDidMount() {
        // 页面加载只执行一次
        console.log('componentDidMount----组件挂载完成的时刻执行')
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate---组件发生改变前执行')
        return true
    }
    componentWillUpdate() {
        console.log('componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate----组件更新之后执行')
    }
    componentWillReceiveProps() {
        // 凡是组件都有生命周期函数，所以子组件也是有的，并且子组件接收了props，这时候函数就可以被执行了 
        console.log('child - componentWillReceiveProps')
    }
    componentWillUnmount() {
        //当组件从页面中删除的时候执行
        console.log('child - componentWillUnmount')
    }
}
export default BaseLanguage;