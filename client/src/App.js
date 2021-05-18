import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {userContext} from './globalContext'
import {useState} from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import Trivia from './components/Trivia';
import Scoreboard from './components/Scoreboard';


function App() {

  const [user, setUser] = useState(null);

  return (
      <userContext.Provider value={{user, setUser}}>

    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/trivia">
            <Trivia />
          </Route>
          <Route path="/scoreboard">
            <Scoreboard />
          </Route>
          <Route exact path="/">
            <Redirect to="/login"/>
          </Route>
        </Switch>
      </Router>
    </div>
    </userContext.Provider>

  );
}

export default App;
