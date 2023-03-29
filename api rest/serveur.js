const express = require('express');
const app = express();


const bodyParser = require('body-parser');
const cors = require('cors');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const tasks = [
  { id: 1, title: 'Task 1', completed: false },
  { id: 2, title: 'Task 2', completed: true }
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});
app.post('/tasks', (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const id = tasks.length + 1;
  const completed = false;
  const newTask = { id, title, completed };

  tasks.push(newTask);
  res.status(201).json(newTask);
});




const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));