import { useContext, useEffect, useState } from "react";
import { userContext } from "../globalContext";
import { useHistory, Link } from "react-router-dom";
import api, { setAuth } from "../api";

function Profile() {
    const { user, setUser } = useContext(userContext);
    const history = useHistory();
    const [loading, setLoading] = useState('loaded');

    useEffect(() => {
        setLoading('loading');
        api.get("/api/users/info")
        .then((res) => {
            const { score } = res.data;
            setUser(Object.assign({}, user, { score }));
            setLoading('loaded');
        }).catch(() => {
            setLoading('failed')
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const logoutHandler = () => {
        const { refreshToken } = user;
        api.post("/api/users/logout", { refreshToken }).then(() => {
            setAuth(null, null);
            history.push("/login");
            setUser(null);
        });
    };

    return (
        <div>
            <h2>{user.name}</h2>
            <h2>{`SCORE: ${loading === 'loading' ? 'Loading...' : loading === 'failed' ? 'X' : user.score}`}</h2>
            <button onClick={logoutHandler}>log out</button>
            <div>
                <Link to='/trivia'>START</Link>
            </div>
            <div>
                <Link to='/scoreboard'>SCOREBOARD</Link>
            </div>
        </div>
    );
}

export default Profile;
