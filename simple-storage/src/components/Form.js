import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { updateValue } from '../actions'

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
    this.state = {value: this.props.value}
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.dispatch(updateValue(this.state.value))
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          label="New Value"
          onChange={this.handleChange}
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


const mapStateToProps = state => {
  return {
    value: state.simpleStorage.value
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Form))
