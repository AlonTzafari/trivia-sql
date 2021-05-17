import {useContext, useEffect} from 'react'; 
import {userContext} from '../globalContext';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function Profile() {
    const {user, setUser} = useContext(userContext);
    const history = useHistory();
    useEffect(() => {
         const config = {headers: {authorization: user.accessToken}};
         axios.get('/api/users/info', config)
         .then(res => {
             const {score} = res.data;
             setUser(Object.assign({}, user, {score}));
         })
     }, [])

    const logoutHandler = () => {
        const {refreshToken} = user;
        axios.post('/api/users/logout', {refreshToken})
        .then(() => {
            history.push('/login');
            setUser(null);
        })
    }
    return (
        <div>
            <h2>{user.name}</h2>
            <h2>{`SCORE: ${user.score}`}</h2>
            <button onClick={logoutHandler}>log out</button>
        </div>
    )
}

export default Profile
