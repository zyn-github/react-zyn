import React, { Component } from 'react';


// 高阶组件
const hoc = (WraooedComponent) => {
    return class extends Component {
        componentDidMount() {
            console.log("hoc");
        }
        render() {
            return <WraooedComponent/>
        }
    }
}

class MtMixinHoc extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="border">
                <p>react高阶函数</p>
            </div>
        )
    }

    componentDidMount() {
        console.log('是来MtMixin组件 componentDidMount')
    }
}
export default hoc(MtMixinHoc);