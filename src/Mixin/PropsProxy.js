
import React, { Component } from 'react';

function ppHOC(WrappedComponent) {
  return class PP extends React.Component {
  	 constructor(props) {
        super(props);
        this.state = {pro: 'lxq'}
    }
    render() {
      const newProps = {
        user: this.state.pro
      }
      return <WrappedComponent {...this.props} {...newProps}/>
    }
  }
}


class MtPropsHoc extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="border">
                <p>react高阶函数 {this.props.user} ppHOC</p>
            </div>
        )
    }

    componentDidMount() {
        console.log('是来MtMixin组件 componentDidMount')
    }
}
export default ppHOC(MtPropsHoc);