import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from "../../redux/user/user.actions";
import { connect } from "react-redux";
import { Redirect } from 'react-router';
const Header = ({ currentUser, setCurrentUser }) => {
    console.log("userrrrrrr", currentUser);
    const logout = () => {
        setCurrentUser( null);
        console.log("user", currentUser);
    }
    return (
        <div className="header">
            <Link className="logo-part" to="/">
                <img className="logo" style={{ color: "black" }} src="https://evolvfit.in/static/media/EvolvLogo.6813368a.png" alt="logo"></img>
            </Link>

            <div className="options">
             <Link style={{ color: "white" }} className="option" to="/user">
                    USER
             </Link>
                <Link style={{ color: "white" }} className="option" to="/admin">
                    ADMIN
             </Link>

                {
                    currentUser ?
                    <div>
                    <Link className="option" to="/" onClick={logout}>SIGN OUT</Link>
                        <Redirect to="/user"></Redirect>
                    </div>
                       
                        
                       
                        :
                        <Link className="option " to="/signin">SIGN IN</Link>
                }


            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);