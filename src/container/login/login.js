import React, { Component } from 'react'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Logo from '../../component/logo/logo'
import UserName from '../../static/img/yonghuming.png'
import Password from '../../static/img/mima.png'

import { login } from '../../actions/user_actions'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName:'',
            pwd:''
        }
    }
    componentDidMount(){
        console.log(this.props)
    }
    register = () => {
        this.props.history.push('/register')
    }
    handleChange = (key, val) => {
        this.setState({
            [key]:val
        })
    }
    handleLogin = () => {
        this.props.login(this.state)
    }
    render() {
        const path = this.props.location.pathname
        const redirectTo = this.props.redirectTo
        return (
            <div>
                {redirectTo&&redirectTo!== path? <Redirect to={this.props.redirectTo}/> : null}
                <Logo></Logo>
                <WingBlank>
                    {this.props.msg? <p>{this.props.msg}</p>:null}
                    <List>
                        <InputItem
                            placeholder = 'Username'
                            onChange = {v=>this.handleChange('userName', v)}
                        >
                            <div style={{ backgroundImage: `url(${UserName})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                        <InputItem
                            placeholder = 'Password'
                            type = 'password'
                            onChange = {v=>this.handleChange('pwd', v)}
                        >
                            <div style={{ backgroundImage: `url(${Password})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                    </List>
                </WingBlank>
                <WhiteSpace />
                <WingBlank>
                    <Button type='primary' onClick={this.handleLogin}>Sign in</Button>
                    <WhiteSpace />
                    <Button onClick={this.register} type='primary'>Sign up</Button>
                </WingBlank>
            </div>
        )
    }
}

const mapStateToProps = (state) => state.user
const mapDispatchToProps = {
  login
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
