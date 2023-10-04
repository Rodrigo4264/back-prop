import 'dotenv/config';

export default{

PORT : process.env.PORT ,

MONGO_LOCAL_URL:  process.env.MONGO_LOCAL_URL ,

mySecretKyeCookie: process.env.mySecretKyeCookie ,

PRIVATE_KEY_JWT: process.env.PRIVATE_KEY_JWT,

CLIENTID_GOOGLE: process.env.CLIENTID_GOOGLE,

CLIENTSECRET_GOOGLE: process.env.CLIENTSECRET_GOOGLE,

DBMYSLQ_NAME: process.env.DBMYSLQ_NAME,

DBMYSQL_USER: process.env.DBMYSLQ_USER,

DBMYSLQ_PASS: process.env.DBMYSLQ_PASS, 

DBMYSLQ_HOST: process.env.DBMYSLQ_HOST,

EMAIL: process.env.EMAIL,

PASSWORD_MAIL_SERVICE: process.env.PASSWORD_MAIL_SERVICE,

}

 