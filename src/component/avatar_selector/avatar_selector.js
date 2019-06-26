import React, { Component } from 'react'
import { Grid, List } from 'antd-mobile'

class AvatarSelector extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    handleClick =(elm)=>{
        this.setState(elm)
    }
    render() {
        const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
                            .split(',')
                            .map(v => ({
                                icon: require(`../../static/img/avatar/${v}.png`),
                                text: v
                            }))
        const gridHeader = this.state.icon? 
            (<div>
                <span>Avatar you choose</span>
                <img style={{width:20}} src={this.state.icon} alt=''/>
            </div>)
            :
            'Please choose avatar'                   
        return (
            <div>
                <List renderHeader={()=>gridHeader}>
                <Grid
                    data={avatarList}
                    columnNum={5} 
                    onClick = {elm=>{
                        this.handleClick(elm)
                        this.props.selectAvatar(elm.text)
                    }} />
                </List>
            </div>
        )
    }
}

export default AvatarSelector