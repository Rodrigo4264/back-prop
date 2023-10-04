import services from "./class.service.js";
import pkg from 'jsonwebtoken';
const { sign } = pkg;
import config from "../config/config.js";

import factory from "../dao/factory.js";
const {userDao} = factory;


// import userDaoMongo from "../dao/mongo/user.dao.js";
// const userDao = new userDaoMongo();

const PRIVATE_KEY_JWT= config.PRIVATE_KEY_JWT

export default class UserService extends services {
    constructor() {
        super(userDao);
    }
//----------------------------------------------------------------
    #generateToken(user){
        const payload = {
            userID : user.id
        };
        return sign(payload,PRIVATE_KEY_JWT,{expiresIn:'10m'});
    }
//----------------------------------------------------------------

async register (user){
    try {
        return await userDao.register(user);
    } catch (error) {
        console.error(error);
    }
}
//----------------------------------------------------------------

async login (user){
    try {
        const userExists = await userDao.login(user);
        console.log('service--->',userExists);
        return userExists ? this.#generateToken(userExists): false;
    } catch (error) {
        console.error(error);
    }
}

}