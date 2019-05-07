import React, { Component } from 'react'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'

import Logo from '../../component/logo/logo'
import UserName from '../../static/img/yonghuming.png'
import Password from '../../static/img/mima.png'

class Login extends Component {
    register = () => {
        this.props.history.push('/register')
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
                    </List>
                </WingBlank>
                <WhiteSpace />
                <WingBlank>
                    <Button type='primary'>Sign in</Button>
                    <WhiteSpace />
                    <Button onClick={this.register} type='primary'>Sign up</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login