import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Result, List, WhiteSpace, Modal } from 'antd-mobile'
import browserCookie from 'browser-cookies'
import { logout } from '../../actions/user_actions'
import { Redirect } from 'react-router-dom'

@connect(
    state=>state.user,
    { logout }
)
class User extends Component {

    clickLogout =()=>{
        const alert = Modal.alert;
        alert('Sign Out', 'Are you sure?', [
          { text: 'Cancel', onPress: () => console.log('cancel') },
          { text: 'Ok', onPress: () => {
            this.props.logout()
            browserCookie.erase('userid')
          }},
        ])
    }
    
    render() {
        const myImg = src => <img src={src} style={{width:50}} alt="" />;
        const Item = List.Item
        return(
            this.props.userName?
                <div>
                    <Result 
                        img={myImg(require(`../../static/img/avatar/${this.props.avatar}.png`))}
                        title={this.props.userName}
                        message={this.props.type === 'Client'? this.props.institution: this.props.serviceType}
                    />
                    <WhiteSpace></WhiteSpace>
                    <List>
                        <Item onClick={this.clickLogout}>
                            Sign Out
                        </Item>
                    </List>
                </div>: <Redirect to={this.props.redirectTo} />
            
        )
    }
}

export default User