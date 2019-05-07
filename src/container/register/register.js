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
            type: 'Client'
        }
    }
    render() {
        return (
            <div>
                <Logo></Logo>
                <WingBlank>
                    <List>
                        <InputItem
                            placeholder = 'Username'
                        >
                            <div style={{ backgroundImage: `url(${UserName})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                        <InputItem
                            placeholder = 'Password'
                        >
                            <div style={{ backgroundImage: `url(${Password})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                        <InputItem
                            placeholder = 'Confirm Password'
                        >
                            <div style={{ backgroundImage: `url(${Password})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                        <RadioItem
                            checked={this.state.type === 'Client'}
                        >
                            <div style={{ backgroundImage: `url(${Client})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </RadioItem>
                        <RadioItem
                            checked={this.state.type === 'Service'}
                        >
                            <div style={{ backgroundImage: `url(${Service})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </RadioItem>
                    </List>
                </WingBlank>

            </div>
        )
    }
}

export default Register