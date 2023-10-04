import MyslqDao from './mysql.dao.js';
import { ProductModel } from './model/products.model.sql.js';

export default class productDaoSql extends MyslqDao {
    constructor(){
        super(ProductModel)
    }
}