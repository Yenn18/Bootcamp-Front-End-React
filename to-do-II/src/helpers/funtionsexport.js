let tasks = [];

export function addTask(task) {
  if (!task) {
    throw new Error('hay que introducir tarea');
  }
  const newTask = { task: task, completed: false };
  tasks.push(newTask);
  return newTask;
}

export function deleteTask(task) {
  tasks = tasks.filter(t => t !== task);
}

export function getTasks() {
  return tasks;
}

export function markTaskCompleted(task) {
  task.completed = true;
}

export function markTaskActive(task) {
  task.completed = false;
}

export function filterTasks(filter) {
  switch (filter) {
    case 'all':
      return tasks;
    case 'active':
      return tasks.filter(task => !task.completed);
    case 'completed':
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
}

export function deleteCompletedTasks() {
  tasks = tasks.filter(task => !task.completed);
}
