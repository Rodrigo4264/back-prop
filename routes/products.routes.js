import { Router } from "express";
import productController from "../contrellers/products.controller.js";

const controller = new productController();

const router = Router();

router
        .get('/', controller.getAll)
        .get('/:id', controller.getById)
        .post('/', controller.create)
        .put('/;id', controller.update)
        .delete('/', controller.delete)

export default router;