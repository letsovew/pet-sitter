
export const checkLoggedUser = (req, res, next) => {
    if(!req.logged.user) return res.json("Please login.");
    next();
};

