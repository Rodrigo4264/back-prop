import MongoDao from "./mongo.dao.js";
import { UserModel } from "./model/user.model.js";
import { createHash, isValidPassword } from "../../utils.js";

export default class userDaoMongo extends MongoDao {
    constructor(){
        super(UserModel);
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
      const userExists = await UserModel.findOne({ email });
      return userExists ?? false;
    } catch (error) {
      console.log(error);
    }
  }
//----------------------------------------------------------------

//----------------------------------------------------------------

//----------------------------------------------------------------
}