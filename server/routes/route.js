import express from 'express';
const router = express.Router();
import { userSignup } from '../controller/user-controller.js'; // ✅ Fixed path

router.post('/signup', userSignup);

export default router;
