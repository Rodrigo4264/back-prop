import MyslqDao from "./mysql.dao.js";
import { UserModel } from "./model/user.model.slq.js";
import { createHash,isValidPassword  } from "../../utils.js";

export default class UserDaoSlq extends MyslqDao {
    constructor(){
        super(UserModel)
    }

    //----------------------------------------------------------------
async register(user) {
    try {
      const { email, password } = user;
      const existUser = await this.getByEmail(email);

      if (!existUser) {
        if (email === "admin@coder.com" && password === "admin1234"){
            return await UserModel.create({
                ...user,
                password: createHash(password),
                role: 'admin'
            });
        }
        return await UserModel.create({
            ...user,
            password: createHash(password),
        });
      } else return false;
    } catch (error) {
      console.log(error);
    }
  }
//----------------------------------------------------------------
async login(user) {
    try {
      const { email, password } = user;
      const userExist = await this.getByEmail(email);
      if (!userExist) return false;
      else {
        const validator= isValidPassword( password,userExist) ? userExist : false;
        return validator
      }
    } catch (error) {
      console.log(error);
    }
  }
//----------------------------------------------------------------
async getByEmail(email) {
        try {
            const user = await this.model.findOne({ 
                where: {
                    email: email
                }
             });
            if(user) return user;
            else return false;
        } catch (error) {
            console.log(error);
        }
  }
//----------------------------------------------------------------
};