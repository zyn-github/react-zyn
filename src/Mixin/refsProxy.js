import React, { Component } from 'react';
//WrappedComponent初始渲染时候会调用ref回调，传入组件实例，在proc方法中，就可以调用组件方法
function refsHOC(WrappedComponent) {

  return class RefsHOC extends React.Component {
    proc(wrappedComponentInstance) {
    	console.log(wrappedComponentInstance)
      // wrappedComponentInstance.method()
    }

    render() {
      const props = Object.assign({}, this.props, {ref: this.proc.bind(this)})
      return <WrappedComponent {...props}/>
    }
  }

}



class MtRefssHoc extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="border">
                <p>react高阶函数refsHOC</p>
            </div>
        )
    }

    componentDidMount() {
        console.log('是来MtMixin组件 componentDidMount')
    }
}
export default refsHOC(MtRefssHoc);