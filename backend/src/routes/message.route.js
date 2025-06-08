import express from "express";
import { isLoggedIn } from "../middleware/auth.midddleware.js";
import { getUserForSidebar, getMessages, sendMesssage } from "../controllers/message.controller.js";

const router =express.Router()

router.get("/users", isLoggedIn, getUserForSidebar)
router.get("/:id", isLoggedIn, getMessages)
router.post("/send/:id",isLoggedIn, sendMesssage)

export default router