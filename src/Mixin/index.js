import React, { Component } from 'react';

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