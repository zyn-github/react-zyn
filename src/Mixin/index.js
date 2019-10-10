import React, { Component } from 'react';

import { mixin } from 'core-decorators';


const PureRender = {
    shouldComponentUpdate() {}
};
const Theme = {
    setTheme() {}
};

@mixin(PureRender, Theme)
class MtMixin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="border">
                <p>react mixin 混入</p>
            </div>
        )
    }
}
export default MtMixin;