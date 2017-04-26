import React from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

class EnsureLoggedInContainer extends React.Component {
  
  componentDidMount() {
    if (!this.props.isLoggedIn) {
      hashHistory.push("/")
    }
  }

  render() {
    if (this.props.isLoggedIn) {
      return this.props.children
    } else {
      return null
    }
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.user.loggedIn,
  }
}

export default connect(mapStateToProps)(EnsureLoggedInContainer)