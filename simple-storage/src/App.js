import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from './components/Form'
import Header from './components/Header'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        { this.props.status &&
          <h3> Transaction Sent </h3>
        }
        <Header />
        <Form />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    status: state.simpleStorage.status
  }
}

export default connect(mapStateToProps)(App)
