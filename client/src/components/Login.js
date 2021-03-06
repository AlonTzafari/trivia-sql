import {useRef, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {userContext} from '../globalContext';
import api, {setAuth} from '../api';

function Login() {

    const {setUser} = useContext(userContext);
    const history = useHistory();
    const usernameRef = useRef();
    const passwordRef = useRef();
    
    const register = (username, password) => {
        return api.post("/api/users/register", {username, password});
    }

    const login = (username, password) => {
        api.post("/api/users/login", {username, password})
        .then(res => {
            const {accessToken, refreshToken} = res.data;
            setUser({name: username, refreshToken});
            setAuth(accessToken, refreshToken);
            history.push('/profile')
        })
        .catch(reason => console.log(reason));
    }

    const registerHandler = () => {
        const username = usernameRef.current.value;
        const password = usernameRef.current.value;
        register(username, password)
        .then( () => login(username, password) )
        .catch( reason => console.log(reason) )
        login(username, password);
    }
    
    const loginHandler = () => {
        const username = usernameRef.current.value;
        const password = usernameRef.current.value;
        login(username, password);
    }
    
    return (
        <div className="login page">
            <input type="text" ref={usernameRef} placeholder="username" required/>
            <input type="password" ref={passwordRef} placeholder="password" />
            <button type="button" onClick={loginHandler}>LOGIN</button>
            <button type="button" onClick={registerHandler}>REGISTER</button>
        </div>
    )
}

export default Login
