import { Router } from "express";
import passport from "passport";
import userController from "../contrellers/user.controller.js";

const controller = new userController();

const router = Router();

router
        .post('/register', controller.register)

        .post('/login', controller.login)

        .get('/', controller.getAll)

        .get('/private', passport.authenticate('jwtCookies'), (req,res)=>res.send(req.user))
        
        .get('/oauth2/redirect/accounts.google.com', passport.authenticate('google', { assignProperty: 'user' }), controller.googleResponse)


export default router;