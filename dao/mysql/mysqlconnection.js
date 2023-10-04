import { Sequelize } from "sequelize";
import config from "../../config/config.js";

export const db = new Sequelize( config.DBMYSLQ_NAME, config.DBMYSQL_USER, config.DBMYSLQ_PASS,{
    host: config.DBMYSLQ_HOST,
    dialect: 'mysql'
});

    export class ConnectMyslqDB {
        static #instance
        constructor(){
                 db.sync({force: false})
                .then(()=>console.log('connection to myslq database ok'))
                .catch(err=>console.log('error to connect to myslq database',err));
        }
    
        static getInstance(){
            if(this.#instance) {
                console.log(' there is already a connection to mysqlDB!');
                return this.#instance;
            } else {
                this.#instance = new ConnectMyslqDB();
                console.log('Connected to MySQLDB!');
                return this.#instance;
            }
        }
    }