import {useContext, useEffect} from 'react'; 
import {userContext} from '../globalContext';
import axios from 'axios';
function Profile() {
    const {user, setUser} = useContext(userContext);
     useEffect(() => {
         const config = {headers: {authorization: user.accessToken}};
         axios.get('/api/users/info', config)
         .then(res => {
             const {score} = res.data;
             setUser(Object.assign({}, user, {score}));
         })
     }, [])

    return (
        <div>
            <h2>{user.name}</h2>
            <h2>{`SCORE: ${user.score}`}</h2>
        </div>
    )
}

export default Profile
