import * as types from '../constants/action_types'

const initialState = {
    chatmsg:[],
    unread: 0
}

export function chat(state = initialState, action) {
    switch(action.type) {
        case types.MSG_LIST:
            return{...state, chatmsg: action.payload, unread: action.payload.filter(v=>!v.read).length}
        case types.MSG_RECV:
            return{...state, chatmsg: [...state.chatmsg, action.payload]}
        case types.MSG_READ:
        default:
            return state
    }
}   