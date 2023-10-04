import { connect } from "mongoose";
import config from '../../config/config.js';

export class ConnectMongoDB {
    static #instance
    constructor(){
        connect(config.MONGO_LOCAL_URL)
    }

    static getInstance(){
        if(this.#instance) {
            console.log(' there is already a connection to mongoDB!');
            return this.#instance;
        } else {
            this.#instance = new ConnectMongoDB();
            console.log('Connected to MongoDB!');
            return this.#instance;
        }
    }
}