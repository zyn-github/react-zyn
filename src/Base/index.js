import React, { Component } from 'react';

import MtButton from '../Button/index.js';
import MtNote from '../Note/index.js';
import MtHook from '../Hook/index.js';
import MtProps from '../Props/index.js';
import MtDom from '../Dom/index.js';
import MtEvent from '../Event/index.js';
import MtClassName from '../Class/index.js';
import MtFlow from '../Flow/index.js';





class BaseLanguage extends Component {
    constructor(props) {
        super(props);
        this.state = { inputValue: 'kk', list: ['张飞', '刘备'], setChildValue: +(new Date()), textValue:'父组件定义值' } // 单向数据流 监听数据
    }

    render() {
        console.log('render---组件挂载中.......')
        // 有state和props变化就会执行
        const { setChildValue, textValue } = this.state;
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
                 <section>
                    <MtDom></MtDom>    
                </section>
                <section>
                    <MtEvent></MtEvent>    
                </section>

                <section>
                    <MtClassName></MtClassName>    
                </section>
                <section>
                    <button onClick={()=> this.changeData()}>通知子组件更新数据</button>
                    <p>父组件数据被更新了：{textValue}</p>
                    <MtFlow appData={setChildValue} handleItemChange={(vau)=> this.handleItemChange(vau)}></MtFlow>    
                </section>
            </div>
        )
    }


    handleItemChange(value){
        // 监子组件的值是否变化
        this.setState({ textValue: value });
    }

    changeData() {
        // 修改数据传递给子组件
        this.setState({ setChildValue: +(new Date()) });
    }

    deleteItem(index) {
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({ list: list });
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