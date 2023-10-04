import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local'

import factory from "../dao/factory.js";
const {userDao} = factory;

const strategyOptions ={
usernameField: 'email',
passportField: 'password',
passReqToCallback: true,
};

const register = async(req, email, password, done) => {
    try {
        const user = await userDao.getByEmail(email)
        if (user) return done(null, false);
        const newUser = await userDao.register(req.body);
        return done(null, newUser);
    } catch (error) {
        consrole.log(error);
    }
}

const login = async(req, email, password, done) => {
    try {
        const user = {email, password}
        const userLogin = await userDao.login(user);
        if(!userLogin) return done(null,false, {message:'User not found'});
        return done(null, userLogin);
    } catch (error) {
        console.error(error);
    }
}

const registerStrategy = new LocalStrategy(strategyOptions, register);
const loginStrategy = new LocalStrategy(strategyOptions, login);

passport.use('register', registerStrategy);
passport.use('login', loginStrategy);

passport.serializeUser ((user, done)=>{
    done(null, user._id);
});
passport.deserializeUser(async(id, done)=>{
    const user = await userDao.getById(id);
    return done(null, user);
});

