import React from 'react'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import Main from '../components/Main'
import HomeContainer from '../containers/HomeContainer'
import UserProfileSelection from '../components/UserProfileSelection'
import Dashboard from '../containers/Dashboard'

export default class Routes extends React.Component{
    render(){
        return(
            <Router history={browserHistory} >
                <Route path='/' component={Main}>
                    <IndexRoute component={HomeContainer}/>
                    <Route path='dashboard' component={Dashboard}/>
                    <Route path='select_profile' component={UserProfileSelection}/>
                </Route>
            </Router>
        )
    }
}