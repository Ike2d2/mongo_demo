import { Task } from '../models/task.mjs';

export async function createTask(req, res) {
  console.log(`create task`);
  try {
    const { taskName } = req.body
    const task = new Task({ taskName })
    task.save()
    console.log(task);
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function listTasks(req, res) {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function listTask(req, res) {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}