import express, { Router } from "express";
import { userSignUp,userLogin } from "../controllers/userController.js";
import { getProducts } from "../controllers/productsController.js";

const router = express.Router();

router.post('/signup', userSignUp);
router.post('/login',userLogin);
router.get('/products',getProducts );
export default router; 