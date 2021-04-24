import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            {/* <Login /> */}
            <h1>Login</h1>
          </Route>
          <Route path="/trivia">
            <h1>Trivia</h1>
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
  );
}

export default App;
