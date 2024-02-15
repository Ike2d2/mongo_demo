import express from 'express';
const router = express.Router();
import { createUser, listUsers, listUser } from '../controllers/user.mjs';

router.post('/', createUser)
router.get('/', listUsers)
router.get('/:id', listUser)

export const userRouter = router;