import React, { Component } from 'react'
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile'
import { update } from '../../actions/user_actions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import AvatarSelector from '../../component/avatar_selector/avatar_selector'

class ServiceInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            serviceType: ''
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
    render() {
        const redirect = this.props.redirectTo
        const path = this.props.location.pathname
        return (
            <div>
                {redirect && redirect!==path? <Redirect to = {this.props.redirectTo}></Redirect> : null}
                <NavBar mode="dark">Service Info</NavBar>
                <AvatarSelector selectAvatar = {this.selectAvatar}></AvatarSelector>
                <InputItem onChange={(v)=>this.handlechange('title', v)}>
                    Title
                </InputItem>
                <TextareaItem 
                    title = 'Service'
                    rows = {3}
                    onChange={(v)=>this.handlechange('serviceType', v)}>
                </TextareaItem>
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
)(ServiceInfo)