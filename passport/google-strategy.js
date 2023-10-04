import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import passport from 'passport';
import config from '../config/config.js';

import factory from "../dao/factory.js";
const {userDao} = factory;


const strategyOptions = {
    ClientID:config.CLIENTID_GOOGLE,
    ClientSecret:config.CLIENTSECRET_GOOGLE,
    callbackURL:'/users/oauth2/redirect/accounts.google.com',
    scope: ['profile', 'email'],
    state: true
};

const registerOrLogin = async (accesToken, refreshToken, profile,done) => {
    const email= profile._json.email;
    const user = await userDao.getByEmail(email);
    if(user) return done(null, user);
    const newUser = await userDao.register({
        first_name: profile._json.given_name,
        last_name: profile._json.family_name,
        email,
        password:'',
        isGoogle: true
    });
return done(null, newUser);
}

passport.use('google', new GoogleStrategy(strategyOptions, registerOrLogin));

passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((id, done) => {
    done(null, id);
});