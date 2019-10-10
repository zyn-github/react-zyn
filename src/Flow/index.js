import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emitter from '../reactBus';

class MtFlow extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static contextTypes = {
        color: PropTypes.string,
        kk: PropTypes.string,
        handleItemApp: PropTypes.func
    };

    static propTypes = { // 静态属性  相当于 Vue Props
        appData: PropTypes.number
    };

    static defaultProps = {
        handleItemChange: () => {},
    };

    zynKK(v){
        emitter.emit('ItemChangeKL', v);
    }

    render() {
        const { appData } = this.props;
        return (
            <div className="border" style={{background: this.context.color}}>
                <p>接收父组件数据(组件 MtFlow)</p>
                <section>
                    <p>父组件向子组件通讯</p>
                    <span>子组件数据更新为:{appData}</span>
                </section>
                <section>
                    <p>子组件向父组件通讯</p>
                    <button onClick={()=> this.props.handleItemChange('被子组件修改了')}>更新父组件数据</button>
                </section>
                <section>
                    <p>(context来实现 跨级组件数据的传递)</p>
                    <p>跨组件修改子组件黄色背景 from App</p>
                     <button onClick={()=> this.context.handleItemApp('To App-->>' + this.context.color)}>跨组件修改顶层组件的值 to App</button>
                </section>
                <section>
                    <p>没有嵌套关系组件通讯(events)</p>
                    <button onClick={()=> this.zynKK('没有嵌套关系组件通讯 from Flow')}>没有嵌套关系组件通讯</button>
                </section>


            </div>
        )
    }
}
export default MtFlow;