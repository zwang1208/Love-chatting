import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getUserList } from '../../actions/user_actions'

import UserCard from '../usercard/usercard'

@connect(
    state => state.chatuser,
    {getUserList}
)
class Client extends Component {

    componentDidMount(){
        this.props.getUserList('Service')
    }
    render() {
        return(
            <UserCard userList={this.props.userList}></UserCard>
        )
    }
}

export default Client