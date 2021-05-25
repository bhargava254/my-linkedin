
import './App.css';
import Login from './components/Login'
import {connect} from 'react-redux';
import Header from './components/Header'
import Home from './components/Home'
import {useEffect} from 'react'
import {getUserAuth} from './actions/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  },[]);

  return (
    <div className="App">
<Router>
  <Switch>
    <Route exact path='/'><Login /></Route>
    <Route exact path='/home'><Header /> <Home /></Route>
  </Switch>
</Router>
    </div>
  );
}

const mapStateToProps=(state)=>{
  return{};
};


const mapDispatchToProps=(dispatch)=>({
  getUserAuth:()=>dispatch(getUserAuth()),
});  


export default connect(mapStateToProps,mapDispatchToProps)
(App);
