import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Login from './components/Login';
import {userContext} from './globalContext'
import {useState} from 'react';

function App() {

  const [userId, setUserId] = useState(null);

  return (
      <userContext.Provider value={{userId, setUserId}}>

    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <h1>Login</h1>
            <Login />
          </Route>
          <Route path="/trivia">
            <h1>Trivia user: {userId}</h1>
          </Route>
          <Route path="/scoreboard">
            <h1>Scoreboard</h1>
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
