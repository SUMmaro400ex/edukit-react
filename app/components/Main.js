import React from 'react'
import Navbar from '../components/navbar'

export default class Main extends React.Component{
    render(){
        return (
            <div>
                <Navbar />
                {this.props.children}
            </div>
        )
    } 
}