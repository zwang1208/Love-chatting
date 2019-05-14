import * as types from '../constants/action_types'
// import { errMsg } from '../actions/user_actions'
import { getRedirectPath } from '../utli'

const initState = {
    redirectTo:'',
    isAuth:false,
    msg:'',
    userName:'',
    pwd:'',
    type: ''
}

export function user(state = initState, action) {
    switch(action.type) {
        case types.REGISTER_SUCCESS:
            return {...state, msg:'', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload}
        case types.LOGIN_SUCCESS:
            return {...state, msg:'', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload}
        case types.ERROR_MSG:
            return {...state, isAuth: false, msg: action.msg}
        default:
            return state
    }
}
