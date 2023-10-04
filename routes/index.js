import { Router } from "express";

import productRouter from './products.routes.js';
import userRouter from './user.routes.js';
import cartRouter from './cart.routes.js';
import mailRouter from './mail.routes.js';
import { validateProductRegister } from "../validator/product.validator.js";
import { validateUserRegister } from "../validator/user.validator.js";



export default class MainRouter{
    constructor(){
        this.router = Router();
        this.initRoutes();
    }

    initRoutes(){
        this.router.use('/product',validateProductRegister, productRouter);
        this.router.use('/user',validateUserRegister, userRouter);
        this.router.use('/cart', cartRouter);
        this.router.use('/mail',mailRouter);
    }

    getRouter(){
        return this.router;
    }
};