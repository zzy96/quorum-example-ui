import { set, get } from '../services/blockchain'

export const updateValueAction = status => ({
  type: 'UPDATE_VALUE',
  status
})

export const getValueAction = value => ({
  type: 'GET_VALUE',
  value
})

export const updateValue = (value) => dispatch => {
  console.log("updateValue")
  set(value, (error, txhash) => {
    if (!error) {
      dispatch(updateValueAction(true))
    }
  })

}

export const getValue = () => dispatch => {
  console.log("getValue")
  get( (error, result) => {
    if (!error){
      dispatch(getValueAction(result))
    }
  })
}
