const initialState = {
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    loggedIn: false,
    authToken: null,
    fetching: false,
    fetched: false,
    error: false,
    userProfiles: []
}
export default function reducer(state = initialState, action){
    switch (action.type){
        case "LOGIN_SUCCESS":{
            return {
                 ...state, 
                fetched: true,
                fetching: false, 
                authToken: action.payload.auth_token, 
                loggedIn: true, 
                password: null, 
                id: action.payload.user.id, 
                firstName: action.payload.user.first_name, 
                lastName: action.payload.user.last_name, 
                email: action.payload.user.email,
                userProfiles: action.payload.user_profiles 
            };
        }
        case "LOGIN_ERROR":{
            return {
                ...state, 
                fetching: false, 
                fetched: false, 
                loggedIn: false, 
                error: action.payload, 
                authToken: null
            }
        }
        case "LOGIN_EMAIL_ENTERED":{
            return { ...state, email: action.payload};
        }
        case "LOGIN_PASSWORD_ENTERED":{
            return { ...state, password: action.payload};
        }
        case "GET_USER_PROFILES_SUCCESS":{
            return {
                ...state,
                userProfiles: action.payload.userProfiles    
            }
        }
        case "RESET_STATE":{
            return initialState;
        }
        case "LOGOUT_ERROR":{
            return {...state};
        }
        default: 
            return state;
    }
}