const initialState = {
    businessEntity: null,
    rights: null,
    roles: null,
    rightRoleLinks: null
}
export default function reducer(state = initialState, action){
    switch (action.type){
        case "FRONT_LOAD_DATA_SUCCESS":{
            return {
                 ...state, 
                 businessEntity: action.payload.business_entity,
                 rights: action.payload.rights,
                 roles: action.payload.roles,
                 rightRoleLinks: action.payload.right_role_links
            };
        }
        case "FRONT_LOAD_DATA_FAILED":{
            return { ...state};
        }
        case "RESET_STATE":{
            return initialState;
        }
        default: 
            return state;
    }
}