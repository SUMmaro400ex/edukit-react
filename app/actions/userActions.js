import axios from 'axios';

export function fetchUser(){
    return function(dispatch){
        axios.get('http://rest.learncode.academy/api/wstern/users')
        .then((response) => {
            dispatch({type: 'USER_RECEIVED', payload: response.data})
        })
        .catch((err) =>{
            dispatch({type: 'FETCH_ERROR', payload: err})
        })
    }
}