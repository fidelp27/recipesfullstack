const jwt = require('jsonwebtoken');
const User = require('../models/users');
const authMiddleware = async(req, res, next)=>{
    const token = req.headers.authorization?.split(' ')[1];
    console.log("middleware", token);
    if(!token){
        return res.status(401).json({message: 'Unauthorized sin token'});
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Buscar el usuario en la base de datos
        const user = await User.findByPk(decoded.id);
        console.log("middleware", user);
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }
        req.user = user;
        console.log("middleware req user", req.user);
        next();
    }catch(err){
        console.error("Error en el middleware de autenticación:", err);
        return res.status(401).json({message: 'Unauthorized error'});
    }
}

module.exports = authMiddleware;