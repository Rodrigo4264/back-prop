import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';

const ajv = new Ajv({ allErrors: true });
addFormats(ajv)
addErrors(ajv)

const registerSchema = Type.Object({
    title : Type.String(),
    description: Type.String(),
    price : Type.Number(),
    category :Type.String(),
    code : Type.Number(),
    stock : Type.Number(),
    thumbnail : Type.Array(),
    status:  Type.Boolean(),
})

const validate = ajv.compile(registerSchema);

export const validateProductRegister = (req, res, next) =>{
    const isValid = validate(req.body);
    if(!isValid) res.status(403).send(ajv.errorsText(validate.errors, { separator: "\n" }));
    else next();
}





