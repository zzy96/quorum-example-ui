import React from 'react'
import { connect } from 'react-redux'
import { getValue } from '../actions'

class Header extends React.Component{

  componentDidMount(){
    this.props.dispatch(getValue())
  }

  render(){
    return (
      <div>
        <h1>Current Value: {this.props.value}</h1>
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
