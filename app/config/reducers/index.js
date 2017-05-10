import { combineReducers} from 'redux'
import user from '../../src/home/reducer'
import sessionData from '../../src/dashboard/reducer'
import staffEditor from '../../src/campus_manager/staff_manager/staff_editor/reducer'

export default combineReducers({
    user,
    sessionData,
    staffEditor
})