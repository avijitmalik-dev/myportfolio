import express from 'express';
import { sendwithMail } from '../controller/mail.controller.js';
const router = express.Router();

router.post("/send-email", sendwithMail);

export default router;
