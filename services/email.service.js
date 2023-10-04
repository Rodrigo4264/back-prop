import {createTransport} from 'nodemailer';
import config from '../config/config.js';

export const transporter = createTransport({
    service: 'gmail',
    port: 465,
    Secure: true,
    auth: {
        user: config.EMAIL,
        pass: config.PASSWORD_MAIL_SERVICE
    }
});