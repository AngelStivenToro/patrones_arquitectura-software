
let tasks = [];
let nextId = 1;

function getAllTasks() {
  return tasks;
}

function addTask(description) {
  const newTask = { id: nextId++, description, completed: false };
  tasks.push(newTask);
}

function markTaskAsCompleted(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = true;
  }
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
}

module.exports = { getAllTasks, addTask, markTaskAsCompleted, deleteTask };
