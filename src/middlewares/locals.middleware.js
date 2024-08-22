import routes from "../routers/routes.js";

export const checkLoggedUser = (req, res, next) => {
    if(!req.logged.user) return res.json("로그인 해주십시오.");
    next();
};

