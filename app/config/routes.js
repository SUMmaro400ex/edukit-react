import React from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import MainContainer from '../src/main'
import HomeContainer from '../src/home'
import EnsureLoggedInContainer from '../src/ensure_logged_in'
import UserProfileSelection from '../src/user_profile_selection/UserProfileSelection'
import DashboardContainer from '../src/dashboard'
import CampusManagerContainer from '../src/campus_manager'
import SchedulerContainer from '../src/scheduler'

export default class Routes extends React.Component{
    render(){
        return(
            <Router history={hashHistory} >
                <Route path='/' component={HomeContainer} >
                    <IndexRoute component={MainContainer}/>
                    <Route component={EnsureLoggedInContainer}>
                        <Route path='dashboard' component={DashboardContainer}/>
                        <Route path='select_profile' component={UserProfileSelection}/>
                        <Route path='campus_manager' component={CampusManagerContainer}/>
                        <Route path='scheduler' component={SchedulerContainer}/>
                    </Route>
                </Route>
            </Router>
        )
    }
}