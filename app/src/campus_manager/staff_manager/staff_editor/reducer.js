const initialState = {
    newStaff:{
        firstName: null,
        lastName: null,
        email: null,
        passwordConfirmation: null,
        password: null,
        hourly:null,
        type: null
    },
    currentStaff:{
        firstName: null,
        lastName: null,
        email: null,
        passwordConfirmation: null,
        password: null,
        hourly:null,
        type: null
    }
    
}
export default function reducer(state = initialState, action){
    switch (action.type){
        case "NEW_STAFF_FIRST_NAME_ENTERED":{
            return {
                 ...state, 
                 newStaff:{
                     ...state.newStaff,
                     firstName: action.payload
                 }
            };
        }
        case "CURRENT_STAFF_FIRST_NAME_ENTERED":{
            return {
                 ...state, 
                 currentStaff:{
                     ...state.currentStaff,
                     firstName: action.payload
                 }
            };
        }
        case "NEW_STAFF_LAST_NAME_ENTERED":{
            return {
                 ...state, 
                 newStaff:{
                     ...state.newStaff,
                     lastName: action.payload
                 }
            };
        }
        case "CURRENT_STAFF_LAST_NAME_ENTERED":{
            return {
                 ...state, 
                 currentStaff:{
                     ...state.currentStaff,
                     lastName: action.payload
                 }
            };
        }
        case "NEW_STAFF_EMAIL_ENTERED":{
            return {
                 ...state,
                 newStaff:{
                    ...state.newStaff,
                    email: action.payload
                 } 
            };
        }
        case "CURRENT_STAFF_EMAIL_ENTERED":{
            return {
                 ...state,
                 currentStaff:{
                    ...state.currentStaff,
                    email: action.payload
                 } 
            };
        }
        case "NEW_STAFF_PASSWORD_ENTERED":{
            return {
                 ...state, 
                 newStaff:{
                     ...state.newStaff,
                     password: action.payload
                 }
            };
        }
        case "CURRENT_STAFF_PASSWORD_ENTERED":{
            return {
                 ...state, 
                 currentStaff:{
                     ...state.currentStaff,
                     password: action.payload
                 }
            };
        }
        case "NEW_STAFF_PASSWORD_CONFIRMATION_ENTERED":{
            return {
                 ...state, 
                 newStaff:{
                     ...state.newStaff,
                     passwordConfirmation: action.payload
                 }
            };
        }
        case "CURRENT_STAFF_PASSWORD_CONFIRMATION_ENTERED":{
            return {
                 ...state, 
                 currentStaff:{
                     ...state.currentStaff,
                     passwordConfirmation: action.payload
                 }
            };
        }
        case "NEW_STAFF_HOURLY_ENTERED":{
            return {
                 ...state, 
                 newStaff:{
                     ...state.newStaff,
                     hourly: action.payload
                 }
            };
        }
        case "CURRENT_STAFF_HOURLY_ENTERED":{
            return {
                 ...state, 
                 currentStaff:{
                     ...state.currentStaff,
                     hourly: action.payload
                 }
            };
        }
        case "NEW_STAFF_TYPE_ENTERED":{
            return {
                 ...state, 
                 newStaff:{
                     ...state.newStaff,
                     type: action.payload
                 }
            };
        }
        case "CURRENT_STAFF_TYPE_ENTERED":{
            return {
                 ...state, 
                 currentStaff:{
                     ...state.currentStaff,
                     type: action.payload
                 }
            };
        }
        case "RESET_STATE":{
            return initialState;
        }
        default: 
            return state;
    }
}