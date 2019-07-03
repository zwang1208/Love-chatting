import React, { Component } from 'react'
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio} from 'antd-mobile'
import { connect } from 'react-redux'

import Logo from '../../component/logo/logo'
import UserName from '../../static/img/yonghuming.png'
import Password from '../../static/img/mima.png'
import Client from '../../static/img/kehuguanli.png'
import Service from '../../static/img/kefu.png'

import { Redirect } from 'react-router-dom'

import { register } from '../../actions/user_actions'
import hocForm from '../../component/formHoc/formHoc'

const RadioItem = Radio.RadioItem;

@hocForm
class Register extends Component {
    componentDidMount(){
        this.props.handleChange('type','Client')
    }
    handleRegister = () => {
        this.props.register(this.props.state)
    }
    render() {
        return (
            <div>
                {this.props.redirectTo? <Redirect to={this.props.redirectTo}/> : null}
                <Logo></Logo>
                <WingBlank>
                    {this.props.msg? <p>{this.props.msg}</p>:null}
                    <List>
                        <InputItem
                            placeholder = 'Username'
                            onChange = {v=>this.props.handleChange('userName', v)}
                        >
                            <div style={{ backgroundImage: `url(${UserName})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                        <InputItem
                            placeholder = 'Password'
                            onChange = {v=>this.props.handleChange('pwd', v)}
                            type='password'
                        >
                            <div style={{ backgroundImage: `url(${Password})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                        <InputItem
                            placeholder = 'Confirm Password'
                            onChange = {v=>this.props.handleChange('repeatPwd', v)}
                            type='password'
                        >
                            <div style={{ backgroundImage: `url(${Password})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                        <RadioItem
                            checked={this.props.state.type === 'Client'}
                            onChange = {()=>this.props.handleChange('type', 'Client')}
                        >
                            <div style={{ backgroundImage: `url(${Client})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </RadioItem>
                        <RadioItem
                            checked={this.props.state.type === 'Service'}
                            onChange = {()=>this.props.handleChange('type', 'Service')}
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

const mapStateToProps = (state) => state.user
const mapDispatchToProps = {
  register
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register)