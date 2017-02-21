import React from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import Main from '../components/Main'
import HomeContainer from '../containers/HomeContainer'
import EnsureLoggedInContainer from '../containers/EnsureLoggedInContainer'
import UserProfileSelection from '../components/UserProfileSelection'
import Dashboard from '../containers/Dashboard'

export default class Routes extends React.Component{
    render(){
        return(
            <Router history={hashHistory} >
                <Route path='/' component={Main}>
                    <IndexRoute component={HomeContainer}/>
                    <Route component={EnsureLoggedInContainer}>
                        <Route path='dashboard' component={Dashboard}/>
                        <Route path='select_profile' component={UserProfileSelection}/>
                    </Route>
                </Route>
            </Router>
        )
    }
}