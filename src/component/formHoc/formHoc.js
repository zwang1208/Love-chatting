import React, { Component } from 'react'

export default function hocForm(Comp) {
    return class WrapperComp extends Component{
        constructor(props){
            super(props)
            this.state = {}
        }
        handleChange = (key, val) => {
            this.setState({
                [key]:val
            })
        }
        render(){
            return <Comp 
                        handleChange = {this.handleChange}
                        {...this.props}
                        state = {this.state}></Comp>
        }
    }
}