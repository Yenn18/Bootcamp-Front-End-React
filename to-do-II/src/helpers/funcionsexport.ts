interface Task {
    task: string;
    completed: boolean;
  }
  
  let tasks: Task[] = [];
  
  export function addTask(task: string): Task {
    if (!task) {
      throw new Error('La tarea no puede estar vacía');
    }
    const newTask: Task = { task, completed: false };
    tasks.push(newTask);
    return newTask;
  }
  
  export function deleteTask(task: Task): void {
    tasks = tasks.filter(t => t !== task);
  }
  
  export function getTasks(): Task[] {
    return tasks;
  }
  
  export function markTaskCompleted(task: Task): void {
    task.completed = true;
  }
  
  export function markTaskActive(task: Task): void {
    task.completed = false;
  }
  
  export function filterTasks(filter: 'all' | 'active' | 'completed'): Task[] {
    switch (filter) {
      case 'all':
        return tasks;
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
    }
  }
  
  export function deleteCompletedTasks(): void {
    tasks = tasks.filter(task => !task.completed);
  }
  