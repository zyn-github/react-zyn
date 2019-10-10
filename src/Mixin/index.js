import React, { Component } from 'react';

import MtMixinBase from './mixin.js';

import MtMixinHoc from './hoc.js';

import MtPropsHoc from './PropsProxy.js';

import MtRefssHoc from './refsProxy.js';

import MtStateHoc from './stateProxy.js';

class MtMixin extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="border">
                <p><a href="https://www.cnblogs.com/mengff/p/9657232.html">react高阶函数参考</a><p/>
                <MtMixinBase></MtMixinBase>
                <MtMixinHoc></MtMixinHoc>
                <MtPropsHoc></MtPropsHoc>
                <MtRefssHoc></MtRefssHoc>
                <MtStateHoc></MtStateHoc>
            </div>
        )
    }

}
export default MtMixin;