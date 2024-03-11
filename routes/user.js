import express from "express";
import { deleteUser, getAllUsers, getUserById, register, specialFunc, updateUser } from "../controllers/user.js";

const router = express.Router();

router.get("/users/all",getAllUsers);

router.post("/users/new",register);

router.get("/userid/special",specialFunc);

router.get("/userid/:id",getUserById);

router.put("/userid/:id",updateUser);

router.delete("/userid/:id",deleteUser);


export default router;
