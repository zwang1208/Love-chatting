import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class AuthRoute extends Component {
    componentDidMount() {
        const urlList = ['/login', '/register'];
        const pathName = this.props.location.pathname;
        if(urlList.indexOf(pathName) > -1) {
            return null;
        }
        axios.get('/user/info').then(res=>{
            if(res.status === 200) {
                if(res.data.code === 0) {

                }else {
                    this.props.history.push('/login')
                }
            }
        })
    }
    render() {
        return null
    }
}

export default withRouter(AuthRoute)