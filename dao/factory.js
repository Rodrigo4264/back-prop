import productDaoMongo from "./mongo/products.dao.js"; 
import userDaoMongo from "./mongo/user.dao.js";
import cartDaoMongo from "./mongo/cart.dao.js";
import { ConnectMongoDB } from "./mongo/mongoconnection.js";
//----------------------------------------------------------------
import {ConnectMyslqDB} from './mysql/mysqlconnection.js'
import productDaoSql from './mysql/products.dao.sql.js'
import UserDaoSlq from './mysql/user.dao.sql.js'
import cartDaoSql from "./mysql/cart.dao.sql.js";
//----------------------------------------------------------------

let userDao;
let productDao;
let cartDao;
let persistence = process.argv[2];
switch(persistence) {
    case 'mongodb':
        ConnectMongoDB.getInstance();
        userDao = new userDaoMongo();
        productDao = new productDaoMongo();
        cartDao = new cartDaoMongo();
        break;
    case 'mysqldb':
        ConnectMyslqDB.getInstance();
        userDao = new UserDaoSlq();
        productDao = new productDaoSql();
        cartDao = new cartDaoSql();
        break;

    default:
        ConnectMongoDB.getInstance();
        userDao = new userDaoMongo();
        productDao = new productDaoMongo();
        cartDao = new cartDaoMongo();
        break;
};

export default {productDao, cartDao, userDao}