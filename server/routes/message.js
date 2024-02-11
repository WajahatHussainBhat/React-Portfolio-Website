import express from 'express';
import { message } from "../controllers/message.js"

const router = express.Router();

router.post('/', message)

export default router;