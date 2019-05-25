import reducer from './reducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    title: reducer
})

export default rootReducer