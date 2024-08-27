export const loginSession = (req, res, next) => {
    const logged = req.user;
    req.logged.user = logged;
    next();
};


export const checkLoggedUser = (req, res, next) => {
    if(!req.logged.user) return res.json("Please login.");
    next();
};