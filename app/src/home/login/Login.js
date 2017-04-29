import React from 'react'

export default class Navbar extends React.Component{
    render(){
        return (
          <div style={this.props.style.container}>
            <div style={this.props.style.form} action="index.html" method="post">
              <input type="text" placeholder="Email" onChange={this.props.updateEmailValue}
              style={this.props.style.input}/>
              <br/><br/>
              <input type="password" placeholder="Password" onChange={this.props.updatePasswordValue}
              style={this.props.style.input}/>
              <br/><br/>
              <input type="submit" value="Login" onClick={this.props.login}/>
            </div>
          </div>
        )
    } 
}