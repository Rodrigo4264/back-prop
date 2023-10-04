import MongoDao from "./mongo.dao.js";
import { ProductModel } from "./model/product.model.js";

export default class productDaoMongo extends MongoDao {
    constructor(){
        super(ProductModel);
    }
}
