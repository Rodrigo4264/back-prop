import MyslqDao from './mysql.dao.js';
import { CartModel } from './model/cart.model.sql.js';

export default class cartDaoSql extends MyslqDao {
    constructor(){
        super(CartModel)
    }
}