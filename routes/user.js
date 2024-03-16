import express from "express";
import {
  getAllUsers,
  getMyProfile,
  login,
  logout,
  register,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/users/all", getAllUsers);

router.post("/users/new", register);

router.post("/users/login", login);

router.get("/users/logout", logout);

router.get("/users/me", isAuthenticated, getMyProfile);

export default router;
