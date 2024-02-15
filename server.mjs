import express from 'express';
import mongoose from 'mongoose';
import { userRouter } from './routes/users.mjs';
import { taskRouter } from './routes/tasks.mjs';
import { mongoURI } from './config/database.mjs';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.URI || mongoURI);

app.use('/api/users', userRouter);

app.use('/api/tasks', taskRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
