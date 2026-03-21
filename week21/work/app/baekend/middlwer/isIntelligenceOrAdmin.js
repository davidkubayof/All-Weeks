export const isIntelligenceOrAdmin = (req, res, next) => {
    if (req.user.user_type === "admin" || req.user.user_type === "intelligence") {
        next()
    } else {
        return res.status(403).json({ message: 'Access denied: intelligence or admin user_type required' });
    }
}