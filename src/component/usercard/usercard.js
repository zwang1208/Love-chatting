import React, { Component } from 'react'
import propTypes from 'prop-types'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';

class UserCard extends Component{
    static propTypes = {
        userList: propTypes.array.isRequired
    }
    render(){
        return(
            <WingBlank>
                <WhiteSpace></WhiteSpace>
                    {this.props.userList.map(v=>(
                        v.avatar?<Card key={v._id}>
                                    <Card.Header
                                        title={v.userName}
                                        thumb={require(`../../static/img/avatar/${v.avatar}.png`)}
                                        extra={<span>{v.title}</span>}/>
                                    <Card.Body>
                                        <div>{v.type === 'Client'?v.institution:v.serviceType}</div>
                                    </Card.Body>
                                </Card>:null
                    ))}
            </WingBlank>
        )
    }
}

export default UserCard