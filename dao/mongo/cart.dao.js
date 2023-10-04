import MongoDao from "./mongo.dao.js";
import { CartModel } from "./model/cart.model.js";
import { ProductModel } from "./model/product.model.js";

export default class cartDaoMongo extends MongoDao {
    constructor(){
        super(CartModel);
    }
//----------------------------------------------------------------
async getById(id) {
    try {
      const cart = await CartModel.findById(id).populate("items.product");
      return cart || false;
    } catch (error) {
      console.log(error);
    }
  }
//----------------------------------------------------------------
async addProductToCart(cartid, productId) {
    try {
      const product = await ProductModel.findById(productId);
      const cart = await CartModel.findById(cartid);
      const productInCart = cart.items.find(
        (item) => item.product._id.toString() === product._id.toString()
      );

      if (productInCart) productInCart.quantity++;
      else
        cart.items.push({
          product,
          quantity: 1,
        });

      await cart.save();
      return cart;
    } catch (error) {
      console.log(error);
    }
  }
//----------------------------------------------------------------
async removeProductFromCart(cartid, productId) {
    try {
      const cart = await CartModel.findById(cartid);
      cart.items = cart.items.filter(
        (item) => item.product._id.toString() !== productId
      );
      await cart.save();
      return cart;
    } catch (error) {
      console.log(error);
    }
  }
//----------------------------------------------------------------
async updateProductQuantity(cartid, productId, quantity) {
    try {
      const cart = await CartModel.findById(cartid);
      const productInCart = cart.items.find(
        (item) => item.product._id.toString() === productId
      );

      if (productInCart) productInCart.quantity = quantity;
      else throw new Error("Product not found in cart");

      await cart.save();
      return cart;
    } catch (error) {
      console.log(error);
    }
  }
//----------------------------------------------------------------
async removeProducts(cartid) {
    try {
      const cart = await CartModel.findByIdAndUpdate(
        cartid,
        { items: [] },
        { new: true }
      );
      return cart;
    } catch (error) {
      console.log(error);
    }
  }
}