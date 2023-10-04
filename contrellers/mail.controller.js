import {transporter} from '../services/email.service.js';
import config from '../config/config.js';

export const sendGmail = async(req, res)=>{
    try {
        const { dest, name } = req.body;
        const gmailOptions = {
            from: config.EMAIL,
            to: dest,
            subject: 'Bienvenido/a',
            html: `<h1>Hola ${name}, ¡Te damos la bienvenida a Prueba!</h1>`
        };
        const response = await transporter.sendMail(gmailOptions);
        console.log('email enviado!');
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}