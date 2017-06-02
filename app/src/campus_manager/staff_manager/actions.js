import axios from 'axios';
import { hashHistory } from 'react-router'

export function submit(staff, businessEntityId, authToken, userProfileId)
{ 
    return function(dispatch){
        axios.post('http://localhost:3000/users.json', {
            headers:{
                Authorization: authToken
            },
            body:{
                staff: staff,
                businessEntityId: businessEntityId,
                userProfileId: userProfileId
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

export function loadStaff(businessEntityId, authToken, userProfileId)
{
    return function(dispatch){
        axios.post(`http://localhost:3000/business_entities/${businessEntityId}/staff.json`,{
            headers:{
                Authorization: authToken
            },
            body:{
                userProfileId: userProfileId
            }
        })
        .then((response) => {
            dispatch({type: 'LOAD_STAFF_SUCCESS', payload: response.data})
        })
        .catch((err) => {
            dispatch({type: 'LOAD_STAFF_ERROR', payload: err})
        })
    }
}