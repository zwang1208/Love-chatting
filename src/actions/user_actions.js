import * as types from '../constants/action_types'
import axios from 'axios';

const errMsg = (msg) => {
    return {type: types.ERROR_MSG, msg}
}
const authSuccess = (data) => {
    return {type: types.AUTH_SUCCESS, payload: data}
}

export const loadInfo = (data) => {
    return {type: types.LOAD_DATA, payload: data}
}

export const login = ({userName, pwd}) => {
    if(!userName || !pwd) {
        return errMsg('Username and password cannot be empty')
    }
    return dispatch => {
        axios.post('/user/login', {userName, pwd})
            .then(res=>{
                if(res.status===200&&res.data.code===0) {
                    dispatch(authSuccess(res.data.data))
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
                    dispatch(authSuccess({userName, pwd, type}))
                }else {
                    dispatch(errMsg(res.data.msg))
                }
            })
    }
}

export const update = (data) =>{
    return dispatch => {
        axios.post('/user/update', data)
            .then(res=>{
                if(res.status===200&&res.data.code===0) {
                    dispatch(authSuccess(res.data.data))
                }else {
                    dispatch(errMsg(res.data.msg))
                }
            })
    }
}
