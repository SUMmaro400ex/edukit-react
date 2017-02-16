const initialState = {
    user:{
        id: null,
        name: null,
        age: null
    },
    authToken: null,
    fetching: false,
    fetched: false,
    error: false,
}
export default function reducer(state = initialState, action){
    switch (action.type){
        case "LOGIN_SUCCESS":{
            state =  { ...state, fetched: true, fetching: false, authToken: action.payload.auth_token, password: null, email: null};
            break;
        }
        case "LOGIN_ERROR":{
            state =  { ...state, fetching: false, fetched: false, error: action.payload, authToken: null, password: null, email: null};
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
    }
    return state;
}