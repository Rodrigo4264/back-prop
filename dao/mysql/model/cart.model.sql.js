import { db } from "../mysqlconnection.js";
import { DataTypes } from "sequelize";

export const CartModel = db.define ('carts', {
    title:{
        type: DataTypes.STRING,
         allowNull: false
    },
    
})