import React,{Component} from "react";
import Header from "./components/header/Header";
import SignIn from "./pages/SignIn/SignIn";
import { Switch, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AdminPage from "./pages/AdminPage/AdminPage";
import NotFound from "./pages/NotFound";


class App extends Component{
  render(){
    return(
      <div>
      
        <Header></Header>
        <Switch>
         
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/signin" component={SignIn}></Route>
          <Route path="/admin" component={AdminPage}></Route>
          <Route path="/user" component={HomePage}></Route>
          <Route path="/*" component={NotFound}></Route>
          
        </Switch>
      </div>
    )
  }
}

export default App;