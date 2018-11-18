import { SimpleStorage } from '../actions'

const initialState = {
	value: 0,
  status: false
}

const simpleStorage = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_VALUE':
      return {
        ...state,
        status: action.status
      }
    case 'GET_VALUE':
      return {
        ...state,
        value: action.value
      }
    default:
      return state
  }
}

export default simpleStorage
