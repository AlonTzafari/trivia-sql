import { useContext, useEffect, useState } from "react";
import { userContext } from "../globalContext";
import { useHistory } from "react-router-dom";
import api, { setAuth } from "../api";

function Profile() {
    const { user, setUser } = useContext(userContext);
    const history = useHistory();
    const [state, setState] = useState({});

    useEffect(() => {
        api.get("/api/users/info")
        .then((res) => {
            const { score } = res.data;
            console.log('score: ', score);
            setUser(Object.assign({}, user, { score }));
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

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
            <h2>{`SCORE: ${user.score}`}</h2>
            <button onClick={logoutHandler}>log out</button>
            <button onClick={() => setState({})}>UPDATE</button>
        </div>
    );
}

export default Profile;
