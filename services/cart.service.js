import services from "./class.service.js";

// import cartDaoMongo from "../dao/mongo/cart.dao.js";
// import { createResponse } from "../utils.js";
// const cartDao = new cartDaoMongo();

import factory from "../dao/factory.js";
const {cartDao} = factory;

export default class CartService extends services {
    constructor() {
        super(cartDao);
    }
//--------------------------------------------------------
async addProductToCart (cartid, productId) {
    try {
      const response = await cartDao.addProductToCart(cartid, productId);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
//--------------------------------------------------------
async removeProductFromCart(cartid, productId){
    try {  
      const response = await cartDao.removeProductFromCart(cartid, productId);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
//--------------------------------------------------------
async updateProductQuantity (cartid, productId, quantity){
    try {
      const response = await cartDao.updateProductQuantity(cartid, productId, quantity);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
//--------------------------------------------------------
async removeProducts(cartid){
    try {
      const response = await cartDao.removeProducts(cartid);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
//--------------------------------------------------------

}