import passport from 'passport';
import { ExtractJwt, Strategy as jwtStrategy } from 'passport-jwt';
import config from '../config/config.js';
import userDaoMongo from '../dao/mongo/user.dao.js';   
const userDao = new userDaoMongo();


const Private_key_JWT = config.PRIVATE_KEY_JWT

const cookieExtractor = (req) => req.cookie.token;

const StrategyOptionsCookies = {
    jwtFromRequest : ExtractJwt.fromExtractors([cookieExtractor]),
    secretOrKey: Private_key_JWT,
};

const verifyToken = async (jwt_payload,done) => {
    const user = await userDao.getById(jwt_payload.userID);
    if (user) return done(null, false);
    return done(null,user);
};

passport.use('jwtCookies', new jwtStrategy(StrategyOptionsCookies,verifyToken));

passport.serializeUser ((user,done) => {
    done(null,user._id);
});

passport.deserializeUser ( async(id,done) => {
    const user = await userDao.getById(id);
  return done(null, user);
})