import { SimpleStorage } from '../actions'

const initialState = {
	connected: [false,false,false,false,false,false,false],
	value: ['not availbale','not availbale','not availbale','not availbale','not availbale','not availbale','not availbale'],
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
        value: action.value,
				status: false
      }
		case 'GET_CONNECTED':
			return {
				...state,
				connected: action.connected
			}
    default:
      return state
  }
}

export default simpleStorage
