export const isValidRole = (req, res, next) => {
    if (req.user.user_type === "admin" || req.user.user_type === "intelligence" || req.user.user_type === "airforce") {
        
        next()
    } else {
        return res.status(403).json({ message: 'Access denied: intelligence or admin or airforce user_type required' });
    }
}