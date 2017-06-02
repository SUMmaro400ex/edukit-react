import axios from 'axios';

export function getProfilesForUser(userId, token)
{
    return function(dispatch){
        const url = `http://localhost:3000/users/${userId}/user_profiles.json`
        axios.get(url, {headers: {Authorization: token}})
        .then((response) => {
            dispatch({type: 'GET_USER_PROFILES_SUCCESS', payload: response.data})
        })
        .catch((err) =>{
            dispatch({type: 'GET_USER_PROFILES_ERROR', payload: err})
        })
    }
}

export function frontLoadData(userProfileId, authToken)
{
    return function(dispatch){
        const url = `http://localhost:3000/front_load_session_data.json/?user_profile_id=${userProfileId}`;
        axios.get(url, {headers: {Authorization: authToken}})
        .then((response) => {
           dispatch({type: 'FRONT_LOAD_DATA_SUCCESS', payload: response.data})
        })
        .catch((err) =>{
            alert('Something went wrong. Please try again.')
            dispatch({type: 'FRONT_LOAD_DATA_FAILED', payload: err})
        })
    }
}