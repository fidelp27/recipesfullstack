const authService = require('../services/authService');

const registerUser = async(req, res)=>{
    try{
        const user = await authService.registerUser(req.body);
        res.status(201).json(user);
    }catch(err){
        res.status(400).json({message: err.message});
    }
}

const loginUser = async(req, res)=>{
    try{
        const {user, token} = await authService.loginUser(req.body);
        res.status(200).json({user, token});
    }catch(err){
        res.status(400).json({message: err.message});
    }
}

module.exports = {
    registerUser,
    loginUser
}