import express from "express";
import {
  register_user,
  login,
  logout,
} from "../controllers/registrationController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Registration System");
});

router.post("/register", register_user);
router.post("/login", login);
router.post("/logout", logout);
router.post("/delete/:id", user_delete);

export default router;
