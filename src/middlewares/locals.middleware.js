import routes from "../routers/routes.js";

export const checkLoggedMiddleware = (req, res, next) => {
    if(!req.logged.user) return res.json("�α��� ���ֽʽÿ�.");
    next();
};
