import { db } from "../mysqlconnection.js";
import { DataTypes } from "sequelize";

export const ProductModel = db.define ('products', {
    title:{
        type: DataTypes.STRING,
         allowNull: false
    },
    description: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT, 
        allowNull: false
    },
    category: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    code: {
        type: DataTypes.INTEGER, 
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER, 
        allowNull: false
    },
    thumbnail : {
        type: DataTypes.STRING, 
        allowNull:true
    },
    status: {
        type: DataTypes.BOOLEAN
    },
})


