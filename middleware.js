import { getUser } from "./utils/auth.js";


export async function loginUserOnly(req, res, next) {
    const userUid = req.cookies?.uid;

    if (!userUid) return res.redirect('/user/login');

    const user = getUser(userUid);
    if (!user) return res.redirect('/user/login');

    req.user = user;
    next();
}

export async function checkAuth(req, res, next) {
    const userUid = req.cookies?.uid;

    const user = getUser(userUid);

    req.user = user;
    next();
}