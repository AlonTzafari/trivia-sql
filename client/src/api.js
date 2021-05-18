import axios from "axios";

const api = axios.create();

let REFRESH_TOKEN = null;
let ACCESS_TOKEN = null;

export const setAuth = (accessToken, refreshToken) => {
    ACCESS_TOKEN = accessToken;
    REFRESH_TOKEN = refreshToken;
};

const refresh = () => {
    return api.put("/api/users/token", { refreshToken: REFRESH_TOKEN })
    .then(res => {
        const {accessToken} = res.data;
        setAuth(accessToken, REFRESH_TOKEN);
    });
};

api.interceptors.request.use(req => {
    if (ACCESS_TOKEN) req.headers.authorization = "bearer " + ACCESS_TOKEN;
    return req;
});

api.interceptors.response.use(
    res => res,
    errRes => {
        if (errRes.response.status !== 401 || //pass all non 401
            errRes.config.url === '/api/users/token' || //pass failed refresh attempt
            errRes.config.isRetry) throw errRes; //pass failed resend attempt
        //refresh token & attempt request resend
        errRes.config.isRetry = true;
        return refresh()
        .then( () => api(errRes.config) );
});

export default api;
