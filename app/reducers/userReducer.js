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
            state =  {
                 ...state, 
                fetched: true,
                fetching: false, 
                authToken: action.payload.auth_token, 
                loggedIn: true, 
                password: null, 
                email: null, 
                id: action.payload.user.id, 
                firstName: action.payload.user.first_name, 
                lastName: action.payload.user.last_name, 
                email: action.payload.user.email,
                userProfiles: action.payload.user_profiles 
            };
            break;
        }
        case "LOGIN_ERROR":{
            state =  {
                ...state, 
                fetching: false, 
                fetched: false, 
                error: action.payload, 
                authToken: null
            };
            break;
        }
        case "LOGIN_EMAIL_ENTERED":{
            state = { ...state, email: action.payload};
            break;
        }
        case "LOGIN_PASSWORD_ENTERED":{
            state = { ...state, password: action.payload};
            break;
        }
        case "GET_USER_PROFILES_SUCCESS":{
            state = {
                ...state,
                userProfiles: action.payload.userProfiles    
            }
        }
    }
    return state;
}