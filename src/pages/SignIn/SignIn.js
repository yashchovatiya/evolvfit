import React,{Component} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import "./SignIn.scss";
import {selectCurrentUser} from "../../redux/user/user.selector";
import {createStructuredSelector} from "reselect";
import { setCurrentUser} from "../../redux/user/user.actions";
import {connect} from "react-redux";


class SignIn extends Component {

constructor(props) {
    super(props);
    this.state = {
        user:null
    }
}

handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    },console.log(this.state.user));
    
  };
render(){
    console.log("console",this.props);
    console.log(this.state.user)
    const{currentUser,setCurrentUser}=this.props;
    return (
        <div className="login">
        
          <h1>Login Page</h1>
          <RadioGroup aria-label="Login page" name="gender1"  >
          <FormControlLabel  id="admin"
            value="admin"
            name="user"
            type="radio"
             onChange={this.handleChange} control={<Radio />} label="admin" />
          <FormControlLabel  id="user"
            value="user"
            name="user"
            type="radio"
             onChange={this.handleChange}  control={<Radio />} label="user" />
          <br></br>
          <button type="submit" onClick={()=>{
              setCurrentUser(this.state.user); 
              
          }}>submit</button>
          </RadioGroup>
         
        </div>
      );
}
}

const mapStateToProps=createStructuredSelector({
    currentUser:selectCurrentUser,
});

const mapDispatchToProps=dispatch=>({
    setCurrentUser:user=>dispatch(setCurrentUser(user))
  })

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);