import controller from './class.controller.js';
import { createResponse } from '../utils.js';

import UserService from '../services/user.service.js'
const userService = new UserService();

export default class userController extends controller {
 constructor (){
    super(userService);
 }
//----------------------------------------------------------------
register = async (req, res, next) => {
   try {
      const newUser = await userService.register(req.body);
      if(!newUser){
         createResponse(res,404,{error: 'User or password already registered'})
      }else{
         createResponse(res,200,newUser);
      }
   } catch (error) {
      next(error.message);
   }
}
//----------------------------------------------------------------
login = async (req, res, next) => {
   try {
     const token = await userService.login(req.body);
      console.log('token-controller--->',token);
     res.cookie('token', token,{ httpOnly: true });
     createResponse(res,200,{token});
   } catch (error) {
      next(error.message);
   }
}
//----------------------------------------------------------------
googleResponse = async (req, res, next) => {
   try {
     const { first_name, last_name, email, isGoogle } = req.user;
     res.json({
       msg: "Register/Login Google OK",
       session: req.session,
       userData: {
         first_name,
         last_name,
         email,
         isGoogle,
       },
     });
   } catch (error) {
     next(error.message);
   }
 };
//----------------------------------------------------------------

//----------------------------------------------------------------

//----------------------------------------------------------------


}