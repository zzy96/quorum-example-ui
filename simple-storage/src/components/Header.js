import React from 'react'
import { connect } from 'react-redux'
import { getValue } from '../actions'
import NodeTable from './NodeTable'

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
        <NodeTable rows={ [
          {'node':1,'value':this.props.value[0]},
          {'node':2,'value':this.props.value[1]},
          {'node':3,'value':this.props.value[2]},
          {'node':4,'value':this.props.value[3]},
          {'node':5,'value':this.props.value[4]},
          {'node':6,'value':this.props.value[5]},
          {'node':7,'value':this.props.value[6]}
        ] } />
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
