import React from 'react'
import { connect } from 'react-redux'
import { getValue } from '../actions'

class Header extends React.Component{

  componentDidMount(){
    this.timer = setInterval(() => {this.props.dispatch(getValue())}, 3000)
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  render(){
    return (
      <div>
        <h1>Node 1 Current Value: {this.props.value[0]}</h1>
        <h1>Node 2 Current Value: {this.props.value[1]}</h1>
        <h1>Node 3 Current Value: {this.props.value[2]}</h1>
        <h1>Node 4 Current Value: {this.props.value[3]}</h1>
        <h1>Node 5 Current Value: {this.props.value[4]}</h1>
        <h1>Node 6 Current Value: {this.props.value[5]}</h1>
        <h1>Node 7 Current Value: {this.props.value[6]}</h1>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    value: state.simpleStorage.value
  }
}

export default connect(mapStateToProps)(Header)
