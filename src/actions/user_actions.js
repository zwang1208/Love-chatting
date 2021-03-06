import * as types from '../constants/action_types'
import axios from 'axios';
import io from 'socket.io-client'

const socket = io('ws://localhost:9093')

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

const userList = (data) => {
    return {type: types.USER_LIST, payload: data}
}

export const getUserList = (type) => {
    return dispatch=>{
        axios.get('/user/list?type='+type)
            .then(res=>{
                if(res.data.code === 0) {
                    dispatch(userList(res.data.data))
                }
            })
    }
}

export const logout = () => {
    return {type: types.LOG_OUT}
}

export const getMsgList = () => {
    return dispatch=>{
        axios.get('/user/msglist')
            .then(res=>{
                if(res.status === 200 & res.data.code === 0){
                    dispatch(msgList(res.data.msgs))
                }
            })
    }
}

function msgList(msgs){
    return{type: types.MSG_LIST, payload: msgs}
}

export const sendMsg = ({from, to, msg}) => {
    return dispatch =>{
        socket.emit('sendmsg', {from, to, msg})
    }
}

function msgRecv(data) {
    return{type: types.MSG_RECV, payload:data}
}

export const recvMsg = () =>{
    return dispatch=>{
        socket.on('recvmsg', function(data){
            console.log(data)
            dispatch(msgRecv(data))
        })
    }
}
