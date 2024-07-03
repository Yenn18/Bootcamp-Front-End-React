import './styles/style.css';
import {
  addTask,
  deleteTask,
  getTasks,
  markTaskCompleted,
  markTaskActive,
  filterTasks,
  deleteCompletedTasks,
} from './helpers/funcionsexport';

interface Task {
  task: string;
  completed: boolean;
}

// Cazamos lo que necesitamos
const inputForm = document.querySelector<HTMLFormElement>('.input-form')!;
const inputTask = document.querySelector<HTMLInputElement>('input[name="task"]')!;
const taskListSection = document.querySelector<HTMLDivElement>('.task-list-section')!;
const allTasksBtn = document.querySelector<HTMLButtonElement>('.btn-all')!;
const activeTasksBtn = document.querySelector<HTMLButtonElement>('.btn-active')!;
const completedTasksBtn = document.querySelector<HTMLButtonElement>('.btn-completed')!;
const deleteCompletedBtn = document.querySelector<HTMLButtonElement>('.delete-completed')!;

//Actualizar desde el DOM
function updateTaskList(taskObject: Task): void {
  const taskArticle = document.createElement('article');
  taskArticle.className = 'flex items-center gap-3 px-5 py-4 border-b-[1px] border-gray-700';

  const checkedClass = taskObject.completed ? 'none ' : 'hidden';
  const textDecoration = taskObject.completed ? 'line-through' : 'peer-checked';

  taskArticle.innerHTML = `
    <label class="flex items-center justify-center border border-gray-500 rounded-full cursor-pointer size-5">
      <input class="hidden peer" type="checkbox" ${taskObject.completed ? 'checked' : ''}>
      <svg class="text-gray-100 bg-indigo-500 rounded-full peer-checked:${checkedClass} size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 8">
        <path fill="none" stroke="currentColor" stroke-width="2" d="M1 4.304L3.696 7l6-6" />
      </svg>
    </label>
    <span class="text-gray-300 cursor-pointer" style="text-decoration: ${textDecoration};">${taskObject.task}</span>
    <button class="ml-auto delete-task">
      <svg class="hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
        <path fill="currentColor" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" />
      </svg>
    </button>
  `;

  taskListSection.appendChild(taskArticle);

  // Creamos evento para marcar las tareas completada
  const checkbox = taskArticle.querySelector<HTMLInputElement>('input[type="checkbox"]')!;
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      markTaskCompleted(taskObject);
    } else {
      markTaskActive(taskObject);
    }
    taskArticle.querySelector<HTMLSpanElement>('span')!.style.textDecoration = taskObject.completed ? 'line-through' : 'none';
  });

  //Creamos evento con el boton de eliminar las tareas
  const deleteButton = taskArticle.querySelector<HTMLButtonElement>('.delete-task')!;
  deleteButton.addEventListener('click', () => {
    deleteTask(taskObject);
    taskArticle.remove();
  });
}

// Añadir desde el formulario las tareas
inputForm.addEventListener('submit', (event) => {
  event.preventDefault();
  try {
    const newTask = inputTask.value.trim();
    const taskObject = addTask(newTask);
    updateTaskList(taskObject);
    inputTask.value = ''; // Limpiar el campo de entrada
  } catch (error) {
    alert((error as Error).message); // Creamos una alerta de error por si nos da error algo
  }
});

// Creamos eventos para los filtros del boton
allTasksBtn.addEventListener('click', () => {
  taskListSection.innerHTML = '';
  const tasks = filterTasks('all');
  tasks.forEach(task => updateTaskList(task));
});

activeTasksBtn.addEventListener('click', () => {
  taskListSection.innerHTML = '';
  const tasks = filterTasks('active');
  tasks.forEach(task => updateTaskList(task));
});

completedTasksBtn.addEventListener('click', () => {
  taskListSection.innerHTML = '';
  const tasks = filterTasks('completed');
  tasks.forEach(task => updateTaskList(task));
});

// Elimina las que estan completadas
deleteCompletedBtn.addEventListener('click', () => {
  deleteCompletedTasks();
  showAllTasks(); // Actualiza la pagina
});

//muestra todas nuestras tareas
function showAllTasks(): void {
  taskListSection.innerHTML = '';
  const tasks = getTasks();
  tasks.forEach(task => updateTaskList(task));
}


document.addEventListener('DOMContentLoaded', showAllTasks);
