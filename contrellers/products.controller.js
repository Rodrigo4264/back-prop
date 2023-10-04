import controller from './class.controller.js';

import ProductService from '../services/products.service.js'
const productService = new ProductService();

export default class productController extends controller {
 constructor (){
    super(productService);
 }
}