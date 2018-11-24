import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { getValue, updateValue } from '../actions'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  input: {
    margin: theme.spacing.unit
  },
})

class Form extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      node: '1',
      privateFor: []
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.dispatch(updateValue(this.state.value, this.state.node, this.state.privateFor))
  }

  handleValueChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  handleNodeChange = event => {
    this.setState({
      node: event.target.value
    })
  }

  handlePrivateFor = event => {
    var nodeList = []
    if (event.target.value.length>2){
      for (var i=1;i<event.target.value.length;i++){
        nodeList.push(event.target.value.slice(i,i+1))
        i++
      }
      console.log(nodeList)
      this.setState({
        privateFor: nodeList
      })
    }
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          label="New Value"
          onChange={this.handleValueChange}
          margin="normal"
        />
        <br/>
        <TextField
          label="Node Number"
          onChange={this.handleNodeChange}
          margin="normal"
        />
        <br/>
        <TextField
          label="Private For List"
          onChange={this.handlePrivateFor}
          margin="normal"
        />
        <br/>
        <Button variant="contained" type="submit">
          Send
        </Button>
      </form>
    )
  }

}

export default connect()(withStyles(styles)(Form))
