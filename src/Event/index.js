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

class MtEvent extends Component {
    constructor(props) {
        super(props);
        this.state = { count: +(new Date()) };
    }

    render() {
        return (
            <div className="border">
                <p>react事件</p>
                <section>
                    <p> count:{this.state.count}</p>
                    <button onClick={this.hander.bind(this)}>绑定点击事件(onClick)</button>
                </section>
            </div>
        )
    }

    // 点击事件
    hander() {
        this.setState({count: +(new Date()) });
    }
}
export default MtEvent;