import React, { Component } from 'react'
import { NavBar, InputItem, TextareaItem } from 'antd-mobile'

import AvatarSelector from '../../component/avatar_selector/avatar_selector'

class ServiceInfo extends Component {
    constructor(props) {
        super(props);
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
    render() {
        return (
            <div>
                <NavBar mode="dark">Service Info</NavBar>
                <AvatarSelector selectAvatar = {elm =>{
                    this.setState({
                        avatar: elm
                    })
                }}></AvatarSelector>
                <InputItem onChange={(v)=>this.handlechange('title', v)}>
                    Title
                </InputItem>
                <TextareaItem 
                    title = 'Service'
                    rows = {3}
                    onChange={(v)=>this.handlechange('serviceType', v)}>
                </TextareaItem>
            </div>
        )
    }
}

export default ServiceInfo