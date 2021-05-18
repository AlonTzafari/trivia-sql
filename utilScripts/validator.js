export const validator = (req, res, next) => {
    const ACCESS_KEY = process.env.ACCESS_KEY;
    const authHeader = req.header('authorization');
    try {
        if (!authHeader) throw 'no token';
        const accessToken = authHeader?.split(' ')[1];
        const user = jwt.verify(accessToken, ACCESS_KEY);
        res.locals.user = user;
        next();
    } catch (err) {
        res.status(401).end();
    }
}
