import express from 'express';
const router = express.Router();
import { createTask, listTasks, listTask } from '../controllers/task.mjs';

router.post('/', createTask)
router.get('/', listTasks)
router.get('/:id', listTask)

export const taskRouter = router;