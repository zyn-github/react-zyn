import React, { Component } from 'react';

// React生命周期可以分为两类
// 当组件挂载和卸载的时候。
// 当􏰆􏰇接􏼫新的数据时，􏲇􏰆􏰇􏰟即更新时候。
//  propTypes 和 defaultProps 分􏳑􏱘􏰓 props 􏰅型􏻸􏻹和􏽣􏺿􏰅型。这两个􏰐性􏲪声明成 􏺆态􏰐性，􏱑􏼩􏵉从􏰅􏰹面也可以􏲚问它􏰳，比如可以这􏱽􏲚问:MtHook.propTypes 和 MtHook.defaultProps
// 􏰟更新过程􏳯的是􏽖􏰆􏰇向􏰑􏱹􏱺 props 或􏰆􏰇􏱕􏳌􏳸行 setState 方􏰿时发生的一􏲓􏼜􏰟新 动作
class MtHook extends Component {

    static propTypes = {};

    static defaultProps = {};



    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log('render---组件挂载中.......'); // 有state和props变化就会执行
        return (
            <div>react 生命周期函数</div>
        )
    }


    componentWillMount() {
        // 页面加载只执行一次 在render方法之前执行
        console.log('componentWillMount----组件将要挂载到页面的时刻==>> 在render方法之前执行')
    }
    componentDidMount() {
        // 页面加载只执行一次 在render方法之后执行
        console.log('componentDidMount----组件挂载完成的时刻执行==>> 在render方法之后执行')
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 可以手动控制是否需要更新
        console.log('shouldComponentUpdate---组件发生改变前执行')
        return true
    }
    componentWillUpdate() {
        // 这里不要操作 setState
        console.log('componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate----组件更新之后执行')
    }
    componentWillReceiveProps() {
        // 此方􏰿可以作为 React 在 props 􏱹􏲜后，渲染之前 setState 的 机会。在此方􏰿中调用 setState 是不会􏵁􏳲渲染的。
        // 凡是组件都有生命周期函数，所以子组件也是有的，并且子组件接收了props，这时候函数就可以被执行了 
        console.log('child - componentWillReceiveProps')
    }
    componentWillUnmount() {
        //当组件从页面中删除的时候执行 
        console.log('child - componentWillUnmount==>> 可以用来内存回收、清除定时器');
    }
}
export default MtHook;