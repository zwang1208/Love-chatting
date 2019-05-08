import React, { Component } from 'react'
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio} from 'antd-mobile'

import Logo from '../../component/logo/logo'
import UserName from '../../static/img/yonghuming.png'
import Password from '../../static/img/mima.png'
import Client from '../../static/img/kehuguanli.png'
import Service from '../../static/img/kefu.png'

const RadioItem = Radio.RadioItem;

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            pwd: '',
            repeatPwd: '',
            type: 'Client'
        }
    }
    handleChange = (key, val) => {
        this.setState({
            [key]:val
        })
    }
    handleRegister = () => {
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <Logo></Logo>
                <WingBlank>
                    <List>
                        <InputItem
                            placeholder = 'Username'
                            onChange = {v=>this.handleChange('userName', v)}
                        >
                            <div style={{ backgroundImage: `url(${UserName})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                        <InputItem
                            placeholder = 'Password'
                            onChange = {v=>this.handleChange('pwd', v)}
                            type='password'
                        >
                            <div style={{ backgroundImage: `url(${Password})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                        <InputItem
                            placeholder = 'Confirm Password'
                            onChange = {v=>this.handleChange('repeatPwd', v)}
                            type='password'
                        >
                            <div style={{ backgroundImage: `url(${Password})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                        <RadioItem
                            checked={this.state.type === 'Client'}
                            onChange = {()=>this.handleChange('type', 'Client')}
                        >
                            <div style={{ backgroundImage: `url(${Client})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </RadioItem>
                        <RadioItem
                            checked={this.state.type === 'Service'}
                            onChange = {()=>this.handleChange('type', 'Service')}
                        >
                            <div style={{ backgroundImage: `url(${Service})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </RadioItem>
                    </List>
                </WingBlank>
                <WhiteSpace />
                <WingBlank>
                    <Button onClick={this.handleRegister} type='primary'>Sign up</Button>
                </WingBlank>

            </div>
        )
    }
}

export default Register