import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    code: {type: String, required: true, unique: true},
    stock: {type: Number, required: true},
    thumbnail: {type: Array},
    status: {type: String, required: true}
})

export const ProductModel = mongoose.model('Products',productSchema)