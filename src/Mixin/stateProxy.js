import React, { Component } from 'react';
function ppHOC(WrappedComponent) {
  return class PP extends Component {
    constructor(props) {
      super(props)
      this.state = {
        name: ''
      }

      this.onNameChange = this.onNameChange.bind(this)
    }
    onNameChange(event) {
      this.setState({
        name: event.target.value
      })
    }
    render() {
      const newProps = {
        name: {
          value: this.state.name,
          onChange: this.onNameChange
        }
      }
       return <WrappedComponent {...this.props} {...newProps}/>
    }
  }
}


@ppHOC
class MtStateHoc extends Component {
  render() {
    {
      //使用ppHOC装饰器之后，组件的props被添加了name属性，可以通过下面的方法，将value和onChange添加到input上面
      //input会成为受控组件
    }
    return (
      <div>
        <p>{this.props.name.value}</p>
        <input name="name" {...this.props.name}/>
      </div>
    )
  }
}

export default MtStateHoc;