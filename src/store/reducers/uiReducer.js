import {types} from '../actions/uiActions'
import {combineReducers} from 'redux'

const toggle = (state = [], action = {}) => {
    switch (action.type) {
        case types.TOGGLE:
            let position = state.indexOf(action.id)
            if ( position !== -1 ){
                return state.filter((item) => item !== state[position])
            }
            return [
                ...state,
                action.id
            ]
        default:
            return state
    }
}

const tabbed = (state = [], action = {}) => {
    switch (action.type) {
        case types.TABBED:
            return [
                action.id
            ]
        default:
            return state
    }
}


export default combineReducers({
    toggle,
    tabbed
})
