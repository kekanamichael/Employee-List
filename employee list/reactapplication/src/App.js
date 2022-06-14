import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Register from './Components/register';
import Login from './Components/login';
import Employees from './Components/employees';
import Add from './Components/add';
import Update from './Components/update';
import Delete from './Components/delete';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Register />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Employees">
            <Employees />
          </Route>
          <Route exact path="/Add">
            <Add />
          </Route>
          <Route exact path="/Update">
            <Update />
          </Route>
          <Route exact path="/Delete">
            <Delete />
          </Route>
       </Switch>
      </div>
    </Router>
  );
}

export default App;
