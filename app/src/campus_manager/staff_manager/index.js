import React from 'react'
import StaffManager from './StaffManager'
import styles from './styles'
import { connect } from 'react-redux'
import { submit } from './actions'
import { loadStaff} from './actions'
import CurrentStaffEditorContainer from './staff_editor/current_staff_editor'
import {NavItem, Image, Tab} from 'react-bootstrap'


class StaffManagerContainer extends React.Component{
    constructor(props) {
        super(props);
        let {sessionData, user, loadStaff} = props;
        this.staffList = this.staffList.bind(this);
        loadStaff(sessionData.businessEntity.id, user.authToken, sessionData.currentUserProfileId);
    }

    currentStaffPanes(){
        let {staff} = this.props.sessionData;
        return(staff.map((member) => 
                <Tab.Pane key={'currentStaffTab' + member.id} eventKey={'currentStaff' + member.id}><CurrentStaffEditorContainer staff={member}/></Tab.Pane>
            )
        )
    }
    staffList(){
        let {staff} = this.props.sessionData;
        return [this.newStaffItem(staff.length)].concat(staff.map((member) => this.currentStaffItem(member)))
    }

    newStaffItem(totalStaff){
        return(<NavItem key={'newStaff'}eventKey='newStaff' style={styles.newStaffItem}>
                    <h2>Staff ({totalStaff}) <i className="fa fa-user-plus" style={styles.newStaffIcon}/></h2>
                </NavItem>)
    }

    currentStaffItem(member){
        return(<NavItem key={'currentStaff' + member.id} eventKey={'currentStaff' + member.id}>
                    <Image src="http://www.loopfitness.com.tr/wp-content/uploads/2015/12/avatar-1.png" circle style={styles.currentStaffIcon}/> 
                    {member.firstName} {member.lastName}
                </NavItem>)
    }

    render() {
        let {sessionData, newStaff, currentStaff} = this.props;
        return (<StaffManager sessionData={sessionData} 
                styles={styles}
                staffList={this.staffList()}
                newStaff={newStaff}
                currentStaffPanes={this.currentStaffPanes()}
                currentStaff={currentStaff}/>)
    }
}

function mapStateToProps(state){
    return {
        user: state.user,
        sessionData: state.sessionData,
        newStaff: state.staffEditor.newStaff,
        currentStaff: state.staffEditor.currentStaff
    }
}

function mapDispatchToProps(dispatch) {
    return(
        {
            loadStaff: function(businessEntityId, authToken, userProfileId){dispatch(loadStaff(businessEntityId, authToken, userProfileId))}
        }   
    );
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(StaffManagerContainer);