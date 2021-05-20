import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { selectCurrentUser } from "../../redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from "../../redux/user/user.actions";
import { connect } from "react-redux";
import Admin from '../../components/Admin/Admin';

 class AdminPage extends Component {
    render() {
        const{currentUser}=this.props;
        if(currentUser==="admin"){
            return(
                <Admin></Admin>
            )
        }
        else{
            return <Redirect to="/*"></Redirect>
        }
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
