import routes from "../routers/routes.js";

export const checkLoggedUser = (req, res, next) => {
    if(!req.logged.user) return res.json("�α��� ���ֽʽÿ�.");
    next();
};

