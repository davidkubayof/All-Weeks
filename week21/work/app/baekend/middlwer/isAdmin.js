export const isAdmin = (req, res, next) => {
    if(!req.user.user_type || req.user.user_type !== "admin"){
        return res.status(403).json({ message: 'Access denied: admin user_type required' });
    }
    next()
}   