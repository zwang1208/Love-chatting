import * as types from '../constants/action_types'
// import { errMsg } from '../actions/user_actions'
import { getRedirectPath } from '../utli'

const initState = {
    redirectTo:'',
    msg:'',
    userName:'',
    type: ''
}

export function user(state = initState, action) {
    switch(action.type) {
        case types.AUTH_SUCCESS:
            return {...state, msg:'', redirectTo: getRedirectPath(action.payload), ...action.payload}
        case types.LOAD_DATA:
            return {...state, ...action.payload}
        case types.ERROR_MSG:
            return {...state, isAuth: false, msg: action.msg}
        case types.LOG_OUT:
            return {...initState, redirectTo:'/login'}
        default:
            return state
    }
}
