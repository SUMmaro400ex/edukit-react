import axios from 'axios';
import { hashHistory } from 'react-router'

export function loginUser(email, password)
{ 
    return function(dispatch){
        axios.post('http://localhost:3000/login.json', {
            email: email,
            password: password
        })
        .then((response) => {
            dispatch({type: 'LOGIN_SUCCESS', payload: response.data})
        })
        .catch((err) =>{
            dispatch({type: 'LOGIN_ERROR', payload: err})
        })
    }
}

export function logoutUser(authToken)
{ 
    return function(dispatch){
        const url = 'http://localhost:3000/logout.json/'
        axios.get(url, {headers: {Authorization: authToken}})
        .then((response) => {
            dispatch({type: 'RESET_STATE', payload: response.data})
        })
        .then((e) =>{
           hashHistory.push('/'); 
        })
        .catch((err) =>{
            dispatch({type: 'RESET_STATE', payload: err.data})
        })        
    }
}