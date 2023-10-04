import controller from './class.controller.js';

import CartService from '../services/cart.service.js'
const cartService = new CartService();

export default class cartController extends controller {
 constructor (){
    super(cartService);
 }

//----------------------------------------------------------------
addProductToCart = async (req, res, next) => {
    try {
      const { cartid, productId } = req.params;
      const response = await cartService.addProductToCart(cartid, productId);
  
      if (response) {
        res.status(201).json(response);
      } else {
        res.status(404).json({ mesagge: "Not found" });
      }
    } catch (error) {
      next(error);
    }
  };
//----------------------------------------------------------------
removeProductFromCart = async (req, res, next) => {
    try {
      const { cartid, productId } = req.params;
      const response = await cartService.removeProductFromCart(cartid, productId);
  
      if (response) {
        res.status(201).json(response);
      } else {
        res.status(404).json({ mesagge: "Not found" });
      }
    } catch (error) {
      next(error);
    }
  };
//----------------------------------------------------------------
updateProductQuantity = async (req, res, next) => {
    try {
      const { cartid, productId } = req.params;
      const { quantity } = req.body;
      const response = await cartService.updateProductQuantity(id, productId,Number(quantity));
  
      if (response) {
        res.status(201).json(response);
      } else {
        res.status(404).json({ mesagge: "Not found" });
      }
    } catch (error) {
      next(error);
    }
  };
//----------------------------------------------------------------
removeProducts = async (req, res, next) => {
    try {
      const { cartid } = req.params;
      const response = await cartService.removeProducts(cartid);
  
      if (response) {
        res.status(201).json(response);
      } else {
        res.status(404).json({ mesagge: "Not found" });
      }
    } catch (error) {
      next(error);
    }
  };
//----------------------------------------------------------------

}