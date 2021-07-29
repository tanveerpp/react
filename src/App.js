import React from 'react';
import Admin from './components/Admin';
import Adminhome from './components/Adminhome';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
const App=()=>
{
  return (
    <>
    <Switch>
    <Route exact path="/" component={Home}></Route>
      <Route exact path="/admin" component={Admin}></Route>
      <Route exact path="/adminhome" component={Adminhome}></Route>
      <Route exact path="/products" component={Products}></Route>
    </Switch>

    </>
  )
}
export default App;