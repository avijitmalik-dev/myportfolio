import express from 'express';
import { getMail, sendwithMail } from '../controller/mail.controller.js';
const router = express.Router();


router.get("/", getMail)
router.post("/send-email", sendwithMail);

export default router;
