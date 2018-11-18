import React from 'react'
import ReactDom from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from './App'
import rootReducer from './reducers'

const logger = createLogger()

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
