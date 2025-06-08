import express from "express";
import { login, logout, signup,updateProfile,checkAuth } from "../controllers/auth.controller.js";
import { isLoggedIn } from "../middleware/auth.midddleware.js";
const router =express.Router()


router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)
router.put("/update-profile",isLoggedIn, updateProfile)
router.get("/check",isLoggedIn, checkAuth)


export default router;