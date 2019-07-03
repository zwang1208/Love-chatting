import React, { Component } from 'react'
import propTypes from 'prop-types'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import { withRouter } from 'react-router-dom'

@withRouter
class UserCard extends Component{
    static propTypes = {
        userList: propTypes.array.isRequired
    }
    handleClick = (v) =>{
        console.log(this.props)
        this.props.history.push(`/chat/${v._id}`)
    }
    render(){
        return(
            <WingBlank>
                <WhiteSpace></WhiteSpace>
                    {this.props.userList.map(v=>(
                        v.avatar?<Card key={v._id}
                                       onClick={()=>this.handleClick(v)}>
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