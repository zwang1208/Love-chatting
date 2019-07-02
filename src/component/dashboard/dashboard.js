import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar } from 'antd-mobile';
import { Switch, Route } from 'react-router-dom'
import NavLinkbar from '../navlink/navlink'

import Service from '../../component/service/service'
import Client from '../../component/client/client'
import User from '../../component/user/user'

function Msg() {
    return <h1>Msg</h1>
}

@connect(
    state => state
)
class Dashboard extends Component {
    render() {
        const user = this.props.user
        const {pathname} = this.props.location
        const navList = [
            {
                path: '/service',
                text: 'Client',
                icon: 'boss',
                title: 'Client List',
                component: Service,
                hide: user.type === 'Client'
            },
            {
                path: '/client',
                text: 'Service',
                icon: 'job',
                title: 'Service List',
                component: Client,
                hide: user.type === 'Service'
        
            },
            {
                path: '/msg',
                text: 'Message',
                icon: 'msg',
                title: 'Message List',
                component: Msg,
            },
            {
                path: '/myinfo',
                text: 'Me',
                icon: 'user',
                title: 'My infomation',
                component: User,
            }
        ]
        return (
            <div>
                <NavBar className='fixed-header' mode='dark'>{navList.find(v=>v.path === pathname).title}</NavBar>
                <div style={{ marginTop: 45 }}>
                    <Switch>
                        { navList.map(v=>(
                            <Route key={v.path} path={v.path} component={v.component}></Route>
                        )) }
                    </Switch>
                </div>
                <NavLinkbar data={navList}></NavLinkbar>
            </div>
        )
    }
}

export default Dashboard