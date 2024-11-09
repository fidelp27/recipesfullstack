const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/users');
require('dotenv').config();

const registerUser = async(data)=>{
    const {first_name, last_name, email, password} = data;
    const hashedPassword = await bcrypt.hash(password, 10);
    if(await User.findOne({where:{email}})){
        throw new Error('User already exists');
    }
    return await User.create({
        first_name,
        last_name,
        email,
        password: hashedPassword
    })
}

const loginUser = async(data)=>{
    const {email, password} = data;
    const user = await User.findOne({where:{email}})
    if(!user){
        throw new Error('User not found');
    }
    const isValdPassword = await bcrypt.compare(password, user.password);
    if(!isValdPassword){
        throw new Error('Invalid password');
    }
    const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '1h'});
    return {user, token};
}

module.exports = {
    registerUser,
    loginUser
}