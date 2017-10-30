import { types } from '../actions/apiActions'
import { combineReducers } from 'redux'

const data = (state = null, action = {}) => {
  switch (action.type) {
		case types.LOAD_SUCCESS:
			return {...state, [action.id]: action.payload}
    default:
      return state
  }
}

export default combineReducers({
	data
})
