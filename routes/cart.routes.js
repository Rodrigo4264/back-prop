import { Router } from "express";
import cartController from "../contrellers/cart.controller.js";

const controller = new cartController();

const router = Router();

router
        .get('/', controller.getAll)
        .get('/:id', controller.getById)
        .post('/', controller.create)
        .put('/;id', controller.update)
        .delete('/', controller.delete)

        .post("/:cartid/product/:productId", controller.addProductToCart)
        .delete("/:cartid/product/:productId", controller.removeProductFromCart)
        .put("/:id/product/:productId", controller.updateProductQuantity)
        .delete("/:id", controller.removeProducts);


export default router;