import express from "express";
import { sendMessage, getMessages, getLastMessages } from "../controllers/message.controller.js";
import protectedRoute from "../middleware/protectedRoute.js";

const router = express.Router()

router.get('/:id', protectedRoute, getMessages)
router.get('/latest/:id', protectedRoute, getLastMessages)
router.post('/send/:id', protectedRoute, sendMessage)

export default router