import { combineReducers } from 'redux'
import { user } from './user_reducer'
import { chatuser } from './chatuser_reducer'
import { chat } from './chat.reducer'

export default combineReducers({
    user,
    chatuser,
    chat
})