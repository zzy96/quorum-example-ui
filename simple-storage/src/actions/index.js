import { set, get, isConnected } from '../services/blockchain'

export const updateValueAction = status => ({
  type: 'UPDATE_VALUE',
  status
})

export const getValueAction = value => ({
  type: 'GET_VALUE',
  value
})

export const getConnectedAction = connected => ({
  type: 'GET_CONNECTED',
  connected
})

export const updateValue = (value, node, privateFor) => dispatch => {
  console.log("updateValue")
  set(value, node, privateFor, (error, txhash) => {
    if (!error) {
      dispatch(updateValueAction(true))
    }
  })
}

export const getValue = () => dispatch => {
  console.log("getValue")
  var valueList = []
  var counter = 0
  for (var i=1; i<=7; i++){
    ((node) => {
      get(node, (error, result) => {
        if (!error){
          valueList[node-1] = result
        } else {
          valueList[node-1] = 'not available'
        }
        counter++
        if (counter == 7){
          dispatch(getValueAction(valueList))
        }
      })
    })(i)
  }
}
