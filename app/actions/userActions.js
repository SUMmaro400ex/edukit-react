import axios from 'axios';

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