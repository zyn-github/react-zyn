import React, { Component } from 'react';

// React 事件组件
/**
 * Virtual DOM 在􏱐􏰛中是以􏱒􏱓的􏵘式􏰛在的，如􏱈想􏰭在这􏳾􏱒􏱓上􏱉加􏰚􏰇，就会􏰯􏰰 简单。
 * React 􏰷于 Virtual DOM 实现了一个 SyntheticEvent (􏲃成􏰚􏰇)􏶅.
 * 我􏰳所定义的􏰚􏰇 􏰫􏰬􏴤会接􏼫到一个 SyntheticEvent 􏱒􏱓的事件，它完全符合􏴚􏲉􏼆􏲃W3C标准，不会􏰛在􏳊􏲲IE的􏼲􏲅性问题。􏰒􏹙与原生的􏴢􏴣􏴤􏰚􏰇一􏰣􏳋有􏰢􏰣的接􏹨，􏰢􏰣􏰤􏰥􏰚􏰇的􏺉􏾗机制我􏰳可以使用 stopPropagation() 和 preventDefault() 􏰊中断它。
 */

/**
 * 所有􏰚􏰇􏰈􏱕动绑定到最􏰹􏶅上。如􏱈􏱏􏰭􏲚问原生􏰚􏰇􏱒􏱓，可以使用 nativeEvent 􏰐性。
 */

/**
 * 在React底层，对事件做了两个事件，事件委托、自动绑定。
 *     事件委托
 *         不会把􏰚􏰇􏰫􏰬函数直接绑定到真实节点􏰲􏱔上，而是把所有􏰚􏰇事件绑定到结构的最􏰹􏶅外层，使用一个统一的监听器，监听器来维持一个隐射，来保存内部的监听事件和函数。
 *     自动绑定  
 *         在 React 􏰆􏰇中，􏳥每个方法􏰿的上下文􏰑􏻰􏰈会􏳯向􏰏􏰆􏰇该组件的实例，􏲇􏱕动绑定 this 为当前􏰆􏰇组件。 
 */
const style = { color: 'red' };
class MtEvent extends Component {
    constructor(props) {
        super(props);
        this.state = { count: +(new Date()) };
        this.handleClick1 = this.handleClick1.bind(this);
    }

    render() {
        return (
            <div className="border" style={style}>
                <p>react事件</p>
                <section>
                    <p> count:{this.state.count}</p>
                    <button onClick={this.hander.bind(this)}>绑定点击事件1(onClick)</button>
                    <button onClick={()=>this.handleClick()}>绑定点击事件2(onClick)</button>
                    <button onClick={this.handleClick1}>绑定点击事件3(onClick)</button>
                    <button ref="button">绑定点击事件4(原生事件)</button>
                </section>
            </div>
        )
    }

    // 点击事件
    hander() {
        this.setState({ count: +(new Date()) });
    }
    handleClick1() {
        this.setState({ count: +(new Date()) });
    }
    handleClick() {
        this.setState({ count: +(new Date()) });
    }

    componentDidMount() {
        // 组件挂载之后，进行事件绑定。
        // 在 React 中使用 DOM 原生􏰚􏰇时，一定􏰭要在组件卸载的时候手动移除事件，否则􏲂􏳵很可能出现􏱐内存􏰛􏺿􏻀的问题。
        // React合成事件则不需要手动卸载事件，React内部已经处理过了。
        // 合成事件只能为当前组件的实例来添加事件，如果需要给body来添加事件就需要使用原生的事件来完成。
        // 
        this.refs.button.addEventListener('click', _ => {
            this.handleClick();
        });
    }

    componentWillUnmount() {
        // 组件卸载之后移除事件
        this.refs.button.removeEventListener('click');
    }



}
export default MtEvent;