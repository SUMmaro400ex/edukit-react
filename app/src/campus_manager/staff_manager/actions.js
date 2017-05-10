import axios from 'axios';
import { hashHistory } from 'react-router'

export function submit(email, password)
{ 
    return function(dispatch){
        axios.post('http://localhost:3000/login.json', {
            email: email,
            password: password
        })
        .then((response) => {
            dispatch({type: 'TA_SUBMISSION_SUCCESS', payload: response.data})
        })
        .catch((err) =>{
            dispatch({type: 'TA_SUBMISSION_ERROR', payload: err})
        })
    }
}