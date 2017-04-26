import React from 'react'
import TAManagerContainer from '../ta_manager'
import BudgetManagerContainer from '../budget_manager'

export default class CampusManager extends React.Component{
    render(){
        return (
            <div style={{width:'100vw', textAlign: 'center'}}>
                <h1>Campus Manager</h1>
                <div>
                    <TAManagerContainer />
                    <BudgetManagerContainer />
                </div>
            </div>
        )
    } 
}