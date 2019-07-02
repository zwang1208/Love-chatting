import React, { Component } from 'react'
import { NavBar, InputItem, Button } from 'antd-mobile'
import { update } from '../../actions/user_actions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import AvatarSelector from '../../component/avatar_selector/avatar_selector'

class ClientInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            institution: ''
        }
    }
    handlechange = (key, val) => {
        this.setState({
            [key]: val
        }) 
    }
    selectAvatar = (elm) => {
        this.setState( {
            avatar: elm
        })
    }
    render(){
        const redirect = this.props.redirectTo
        const path = this.props.location.pathname
        return (
            <div>
                {redirect && redirect!==path? <Redirect to = {this.props.redirectTo}></Redirect> : null}
                <NavBar mode="dark">Client Info</NavBar>
                <AvatarSelector selectAvatar = {this.selectAvatar}></AvatarSelector>
                <InputItem onChange={(v)=>this.handlechange('title', v)}>
                    Title
                </InputItem>
                <InputItem onChange={(v)=>this.handlechange('institution', v)}>
                    Institution
                </InputItem>
                <Button
                    onClick = {() => this.props.update(this.state)}
                    type = 'primary'
                >Save</Button>
            </div>
        )
    }
}
const mapStateToProps = state => state.user;
const mapDispatchToProps = {
    update
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClientInfo)