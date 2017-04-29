import React from 'react'
import TAManagerContainer from './ta_manager'
import BudgetManagerContainer from './budget_manager'
import styles from './styles'

export default class CampusManager extends React.Component{
    render(){
        return (
            <div style={styles.container}>
                <h1>Campus Manager</h1>
                <div>
                    <TAManagerContainer />
                    <BudgetManagerContainer />
                </div>
            </div>
        )
    } 
}