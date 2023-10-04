import { Router } from "express";
import {sendGmail} from '../contrellers/mail.controller.js';

const router = Router();

router
      .post('/gmail', sendGmail);

export default router;