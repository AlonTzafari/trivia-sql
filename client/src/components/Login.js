import {useRef, useContext, useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {userContext} from '../globalContext';
import axios from 'axios';
function Login() {

    const {setUserId} = useContext(userContext);
    const input = useRef();
    const [start, setStart] = useState(false);
    
    const clickHandler = () => {
        const name = input.current.value;
        axios.put("/trivia/user", {username: name} )
        .then(res => {
            setUserId(res.data.userId);
            setStart(true);
        });
    }

    return (
        <div className="login page">
            <input type="text" ref={input} placeholder="Enter username"/>
            <button onClick={clickHandler}>START GAME</button>
            {start ? <Redirect to="/trivia"/> : null}
            <Link to="/scoreboard">SCOREBOARD</Link>
        </div>
    )
}

export default Login
