const initialState = {
    businessEntity: null,
    rights: null,
    roles: [],
    rightRoleLinks: null,
    currentUserProfileId: null,
    currentApp: null,
    staff: []
}
export default function reducer(state = initialState, action){
    switch (action.type){
        case "FRONT_LOAD_DATA_SUCCESS":{
            return {
                 ...state, 
                 businessEntity: action.payload.business_entity,
                 rights: action.payload.rights,
                 roles: action.payload.roles,
                 rightRoleLinks: action.payload.right_role_links,
                 currentUserProfileId: action.payload.user_profile_id
            };
        }
        case "FRONT_LOAD_DATA_FAILED":{
            return { ...state};
        }
        case "RESET_STATE":{
            return initialState;
        }
        case "APP_SELECTED":{
            return {
                ...state,
                currentApp: action.payload
            }
        }
        case "LOAD_STAFF_SUCCESS":{
            let staff = action.payload.map((staff) =>{
                return({
                    id: staff.id,
                    firstName: staff.first_name,
                    lastName: staff.last_name,
                    email: staff.email,
                    createdAt: staff.created_at,
                    updatedAt: staff.updated_at,
                    userProfiles: staff.user_profiles.map((userProfile) =>{
                        return({
                            id: userProfile.id,
                            userId: userProfile.user_id,
                            createdAt: userProfile.created_at,
                            updatedAt: userProfile.updated_at,
                            businessEntityId: userProfile.business_entity_id,
                            roles: userProfile.roles.map((role) =>{
                                return ({
                                    id: role.id,
                                    name: role.name,
                                    description: role.description,
                                    code: role.code,
                                    createdAt: role.created_at,
                                    updatedAt: role.updated_at
                                })
                            })
                        })
                    })
                })
            })
            return {
                 ...state, 
                 staff: staff
            };
        }
        default: 
            return state;
    }
}