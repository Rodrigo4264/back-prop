import express from 'express';
import { errorHandler } from './middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from "passport";
import config from './config/config.js';
import './passport/local_strategy.js'
import './passport/jwt-strategy.js'
//import './passport/google-strategy.js'

import MainRouter from './routes/index.js';
const mainRouter = new MainRouter();

const PORT = config.PORT 

const app = express();

app
    .use(express.json())
    .use(express.urlencoded({ extended:true}))
    .use(cookieParser(process.env.mySecretKyeCookie))
    .use(errorHandler)

    .use(passport.initialize())
    .use(passport.session())

    .use('/api', mainRouter.getRouter())

    

app.listen(PORT,() => {console.log(`listening on port ${PORT}`)});
