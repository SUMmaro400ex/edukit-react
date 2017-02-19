import axios from 'axios';

export function getProfilesForUser(userId, token)
{
    return function(dispatch){
        const url = 'http://localhost:3000/users/' + userId + '/user_profiles.json'
        console.log('auth token ' + token);
        axios.get(url, {headers: {Authorization: token}})
        .then((response) => {
            dispatch({type: 'GET_USER_PROFILES_SUCCESS', payload: response.data})
        })
        .catch((err) =>{
            dispatch({type: 'GET_USER_PROFILES_ERROR', payload: err})
        })
    }
}