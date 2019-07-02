import * as types from '../constants/action_types'

const initialState = {
    userList: []
}
export function chatuser(state=initialState, action) {
    switch(action.type){
        case types.USER_LIST:
            return {...state, userList: action.payload}
        default:
            return state
    }
}