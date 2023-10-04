import services from "./class.service.js";

import factory from "../dao/factory.js";
const {productDao} = factory;

// import productDaoMongo from "../dao/mongo/products.dao.js";
// const prodDao = new productDaoMongo();

export default class ProductService extends services {
    constructor() {
        super(productDao);
    }
}
