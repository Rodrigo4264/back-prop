export const createResponse = (res, statusCode, data) => {
    return res.status(statusCode).json({ data });
  };
//----------------------------------------------------------------
import {hashSync, compareSync, genSaltSync} from 'bcrypt';

export const createHash = (password) => hashSync(password, genSaltSync(10));

export const isValidPassword = ( password, user) =>{
  const com = compareSync(password, user.password)
  return com
}
//----------------------------------------------------------------

