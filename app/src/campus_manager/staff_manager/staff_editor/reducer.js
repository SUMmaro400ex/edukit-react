const initialState = {
    newStaff:{
        firstName: null,
        lastName: null,
        email: null,
        passwordConfirmation: null,
        password: null
    },
    currentStaff:{
        firstName: null,
        lastName: null,
        email: null,
        passwordConfirmation: null,
        password: null
    }
    
}
export default function reducer(state = initialState, action){
    switch (action.type){
        case "NEW_STAFF_FIRST_NAME_ENTERED":{
            return {
                 ...state, 
                 newStaff:{
                     firstName: action.payload
                 }
            };
        }
        case "CURRENT_STAFF_FIRST_NAME_ENTERED":{
            return {
                 ...state, 
                 currentStaff:{
                     firstName: action.payload
                 }
            };
        }
        
        case "NEW_STAFF_LAST_NAME_ENTERED":{
            return {
                 ...state, 
                 newStaff:{
                     lastName: action.payload
                 }
            };
        }
        case "NEW_STAFF_EMAIL_ENTERED":{
            return {
                 ...state,
                 newStaff:{
                    email: action.payload
                 } 
            };
        }
        case "NEW_STAFF_PASSWORD_ENTERED":{
            return {
                 ...state, 
                 newStaff:{
                     password: action.payload
                 }
            };
        }
        case "NEW_STAFF_PASSWORD_CONFIRMATION_ENTERED":{
            return {
                 ...state, 
                 newStaff:{
                     passwordConfirmation: action.payload
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