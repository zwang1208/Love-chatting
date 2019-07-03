import React, { Component } from 'react'
import { List, InputItem, NavBar, Icon, Grid } from 'antd-mobile';
import {connect} from 'react-redux'
import {getMsgList, sendMsg, recvMsg} from '../../actions/user_actions'

@connect(
    state => state,
    { getMsgList, sendMsg, recvMsg}
)
class Chat extends Component {
    constructor(props){
        super(props)
        this.state = {
            text:'',
            msg: [],
        }
    }
    componentDidMount(){
        if(!this.props.chat.chatmsg.length){
            this.props.getMsgList()
            this.props.recvMsg()
        }
    }
    handleSubmit(){
        // socket.emit('sendmsg', {text: this.state.text})
        // this.setState({text: ''})
        console.log(this.props)
        const from = this.props.user._id //current user
        const to = this.props.match.params.userName
        const msg = this.state.text
        this.props.sendMsg({from, to, msg})
        this.setState({text: ''})
    }
    fixCarousel(){
        setTimeout(function(){
			window.dispatchEvent(new Event('resize'))
		},0)
    }
    render(){
        return(
            <div className='stick-footer'>
                    <List>
                        <InputItem
                            placeholder='type....'
                            value = {this.state.text}
                            onChange={v=>{
                                this.setState({text: v})
                            }}
                            extra={
                                <div>
                                    <span 
                                        onClick={()=>
                                        {this.setState({showEmoji: !this.state.showEmoji})
                                         this.fixCarousel()
                                        }} 
                                        style={{marginRight:15}}>😃</span>
                                    <span onClick={()=>this.handleSubmit()}>Send</span>
                                </div>
                            }
                        ></InputItem>
                    </List>
            </div>
        )
    }
}

export default Chat