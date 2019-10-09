import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * @key ProTypes
 * @link https://react-1251415695.cos-website.ap-chengdu.myqcloud.com/docs/typechecking-with-proptypes.html
 * @des 用法参考
 */

class MtProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prolist: []
        };
    }
    // 静态属性  相当于 Vue Props
    static propTypes = {
        classPrefix: PropTypes.string, // 定义类型 string
        className: PropTypes.string, // 定义类型 string
        defaultActiveIndex: PropTypes.number, // 定义类型 number
        activeIndex: PropTypes.number, // 定义类型 number
        onChange: PropTypes.func, // 定义类型 finction
        disable: PropTypes.bool, // 传递布尔类型
        order: PropTypes.string.isRequired, // 必须传递
        children: PropTypes.oneOfType([ // 满足其中任意一个
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
        ]),
    };
    render() {
        return (
            <div>
                <p>PropTypes 用法: {this.props.order}</p>
                <button onClick={this.getPropTypes.bind(this)}>查看PropTypes支持类型</button>
                <ul>
                    {
                        this.state.prolist.map((item,index)=>{
                           return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }

    getPropTypes() {
        this.setState({'prolist': Object.keys(PropTypes)});
    }
}
export default MtProps;