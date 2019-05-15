import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadInfo } from '../../actions/user_actions'

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
                    this.props.loadInfo(res.data.data)
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

const mapStateToProps = (state) => state.user
const mapDispatchToProps = {
    loadInfo
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(AuthRoute)
)