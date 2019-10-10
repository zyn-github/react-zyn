import React, { Component } from 'react';

import { mixin } from 'core-decorators';


// react 混入

const PureRender = {
    componentDidMount() {
        console.log('是来自混入的函数 componentDidMount')
    }
};
const Theme = {
    setTheme() {
        alert('minx func');
    }
};

@mixin(PureRender, Theme)
class MtMixinBase extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="border">
                <p onClick={()=> this.setTheme()}>react mixin 混入</p>
                <button onClick={()=> this.setTheme()}>调用混入方法</button>
            </div>
        )
    }

    componentDidMount() {
        console.log('是来MtMixinBase组件 componentDidMount')
    }
}
export default MtMixinBase;