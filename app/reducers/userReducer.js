const initialState = {
    user:{
        id: null,
        name: null,
        age: null
    },
    fetching: false,
    fetched: false,
    error: false
}
export default function reducer(state = initialState, action){
    switch (action.type){
        case "FETCH_USER":{
            state = { ...state, fetching: true};
        }
        case "USER_RECEIVED":{
            state =  { ...state, fetched: true, fetching: false, user: action.payload};
        }
        case "FETCH_ERROR":{
            state =  { ...state, fetching: false, fetched: false, error: action.payload};
        }
        case "SET_USER_NAME":{
            state =  { ...state.user, name: action.payload};
        }
    }
    return state;
}