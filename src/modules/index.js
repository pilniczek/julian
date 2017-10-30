import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import apiDataReducer from '../store/reducers/apiDataReducer'
import uiReducer from '../store/reducers/uiReducer'

export default combineReducers({
    routing: routerReducer,
    api: apiDataReducer,
    ui: uiReducer,
})