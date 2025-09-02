import { Router } from "express";
import { handleUserLogin, handleUserSignup } from "../controllers/user.js";
const router = Router();


router.post("/signup", handleUserSignup)
router.post("/login", handleUserLogin)

router.get("/signup", (req, res) => res.render("signup"))
router.get("/login", (req, res) => res.render("login"))



export default router;