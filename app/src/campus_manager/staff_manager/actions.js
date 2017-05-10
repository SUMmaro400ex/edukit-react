import axios from 'axios';
import { hashHistory } from 'react-router'

export function submit(staff, authToken)
{ 
    return function(dispatch){
        axios.post('http://localhost:3000/users.json', {
            headers:{
                Authorization: authToken
            },
            body:{
                staff: staff
            }
        })
        .then((response) => {
            dispatch({type: 'TA_SUBMISSION_SUCCESS', payload: response.data})
        })
        .catch((err) =>{
            dispatch({type: 'TA_SUBMISSION_ERROR', payload: err})
        })
    }
}