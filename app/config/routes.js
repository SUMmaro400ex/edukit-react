import React from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import MainContainer from '../containers/MainContainer'
import HomeContainer from '../containers/HomeContainer'
import EnsureLoggedInContainer from '../containers/EnsureLoggedInContainer'
import UserProfileSelection from '../components/UserProfileSelection'
import Dashboard from '../containers/Dashboard'
import CampusManagerContainer from '../containers/CampusManagerContainer'
import SchedulerContainer from '../containers/SchedulerContainer'

export default class Routes extends React.Component{
    render(){
        return(
            <Router history={hashHistory} >
                <Route path='/' component={HomeContainer} >
                    <IndexRoute component={MainContainer}/>
                    <Route component={EnsureLoggedInContainer}>
                        <Route path='dashboard' component={Dashboard}/>
                        <Route path='select_profile' component={UserProfileSelection}/>
                        <Route path='campus_manager' component={CampusManagerContainer}/>
                        <Route path='scheduler' component={SchedulerContainer}/>
                    </Route>
                </Route>
            </Router>
        )
    }
}