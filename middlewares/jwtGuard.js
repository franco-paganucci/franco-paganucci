import jwt from 'jsonwebtoken';

const validateToken = (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1];

    if (!token) {
        return res.status(403).json({ message: "Token is required" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {
            id: decoded.id,
            roleId: decoded.roleId,
            userEmail: decoded.userEmail,
        };
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid or expired token" });
    }
};

export default validateToken;
