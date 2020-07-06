import { combineReducers } from 'redux'
import {userReducer} from './card/reducer'
export default combineReducers({
    user: userReducer
})