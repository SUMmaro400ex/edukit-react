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
    currentStaff:[]
    
}
export default function reducer(state = initialState, action){
    const getCurrentStaffIndexById = id => (state.currentStaff.findIndex((staff)=>staff.id === id))

    switch (action.type){
        case "NEW_STAFF_FIRST_NAME_ENTERED":{
            return {
                 ...state, 
                 newStaff:{
                     ...state.newStaff,
                     firstName: action.payload
                 }
            }
        }
        case "CURRENT_STAFF_FIRST_NAME_ENTERED":{
            let {value, staffId} = action.payload;
            let updatedCurrentStaff = state.currentStaff.slice(0)
            updatedCurrentStaff[getCurrentStaffIndexById(staffId)].firstName = value;
            return {
                 ...state, 
                 currentStaff: updatedCurrentStaff
            }
        }
        case "NEW_STAFF_LAST_NAME_ENTERED":{
            return {
                 ...state, 
                 newStaff:{
                     ...state.newStaff,
                     lastName: action.payload
                 }
            }
        }
        case "CURRENT_STAFF_LAST_NAME_ENTERED":{
            let {value, staffId} = action.payload;
            let updatedCurrentStaff = state.currentStaff.slice(0)
            updatedCurrentStaff[getCurrentStaffIndexById(staffId)].lastName = value;
            return {
                 ...state, 
                 currentStaff: updatedCurrentStaff
            }
        }
        case "NEW_STAFF_EMAIL_ENTERED":{
            return {
                 ...state,
                 newStaff:{
                    ...state.newStaff,
                    email: action.payload
                 } 
            }
        }
        case "CURRENT_STAFF_EMAIL_ENTERED":{
            let {value, staffId} = action.payload;
            let updatedCurrentStaff = state.currentStaff.slice(0)
            updatedCurrentStaff[getCurrentStaffIndexById(staffId)].email = value;
            return {
                 ...state,
                 currentStaff: updatedCurrentStaff
            }
        }
        case "NEW_STAFF_PASSWORD_ENTERED":{
            return {
                 ...state, 
                 newStaff:{
                     ...state.newStaff,
                     password: action.payload
                 }
            }
        }
        case "NEW_STAFF_PASSWORD_CONFIRMATION_ENTERED":{
            return {
                 ...state, 
                 newStaff:{
                     ...state.newStaff,
                     passwordConfirmation: action.payload
                 }
            }
        }
        case "NEW_STAFF_HOURLY_ENTERED":{
            return {
                 ...state, 
                 newStaff:{
                     ...state.newStaff,
                     hourly: action.payload
                 }
            }
        }
        case "CURRENT_STAFF_HOURLY_ENTERED":{
            let {value, staffId} = action.payload;
            let updatedCurrentStaff = state.currentStaff.slice(0)
            updatedCurrentStaff[getCurrentStaffIndexById(staffId)].hourly = value;
            return {
                 ...state, 
                 currentStaff: updatedCurrentStaff
            }
        }
        case "NEW_STAFF_TYPE_ENTERED":{
            return {
                 ...state, 
                 newStaff:{
                     ...state.newStaff,
                     type: action.payload
                 }
            }
        }
        case "CURRENT_STAFF_TYPE_ENTERED":{
            let {value, staffId} = action.payload;
            let updatedCurrentStaff = state.currentStaff.slice(0)
            updatedCurrentStaff[getCurrentStaffIndexById(staffId)].type = value;
            return {
                 ...state, 
                 currentStaff: updatedCurrentStaff
            }
        }
        case "UPDATE_CURRENT_STAFF":{
            let currentStaff = action.payload.map((staff) =>{
                return({
                    id: staff.id,
                    firstName: staff.first_name,
                    lastName: staff.last_name,
                    email: staff.email
                })
            })
            return {
                 ...state, 
                 currentStaff: currentStaff
            }
        }
        case "RESET_STATE":{
            return initialState;
        }
        default: 
            return state;
    }
}