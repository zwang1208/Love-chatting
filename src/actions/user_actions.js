import * as types from '../constants/action_types'
import axios from 'axios';

const errMsg = (msg) => {
    return {
        type: types.ERROR_MSG,
        msg
    }
}
const registerSuccess = (data) => {
    return {type: types.REGISTER_SUCCESS, payload: data}
}

const loginSuccess = (data) => {
    return {type: types.LOGIN_SUCCESS, payload: data}
}

export const login = ({userName, pwd}) => {
    if(!userName || !pwd) {
        return errMsg('Username and password cannot be empty')
    }
    return dispatch => {
        axios.post('/user/login', {userName, pwd})
            .then(res=>{
                if(res.status===200&&res.data.code===0) {
                    dispatch(loginSuccess(res.data.data))
                }else {
                    dispatch(errMsg(res.data.msg))
                }
            })
    }
} 

export const register = ({userName, pwd, repeatPwd, type}) => {
    if(!userName || !pwd ) {
        return errMsg('Username and password cannot be empty')
    }
    if(pwd!==repeatPwd) {
        return errMsg('Password is not same')
    }
    return dispatch => {
        axios.post('/user/register', {userName, pwd, type})
            .then(res=>{
                if(res.status===200&&res.data.code===0) {
                    dispatch(registerSuccess({userName, pwd, type}))
                }else {
                    dispatch(errMsg(res.data.msg))
                }
            })
    }
}
