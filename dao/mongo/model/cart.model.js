import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  items: { type: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
        },
        quantity: {type: Number, required: true, min: 0,},
      },
    ],
    required: true,
    default: [],
  },
});
export const CartModel = mongoose.model("carts", cartSchema);