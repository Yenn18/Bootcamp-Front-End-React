import './styles/style.css';
import {
  addTask,
  deleteTask,
  getTasks,
  markTaskCompleted,
  markTaskActive,
  filterTasks,
  deleteCompletedTasks,
} from './helpers/funtionsexport';

// Cazamos lo que necesitamos del html y empezamos
const inputForm = document.querySelector('.input-form');
const inputTask = document.querySelector('input[name="task"]');
const taskListSection = document.querySelector('.task-list-section');
const allTasksBtn = document.querySelector('.btn-all');
const activeTasksBtn = document.querySelector('.btn-active');
const completedTasksBtn = document.querySelector('.btn-completed');
const deleteCompletedBtn = document.querySelector('.delete-completed');

// Com esta funcion actualizamos el DOM
function updateTaskList(taskObject) {
  const taskArticle = document.createElement('article');
  taskArticle.className = 'flex items-center gap-3 px-5 py-4 border-b-[1px] border-gray-700';

  const checkedClass = taskObject.completed ? 'none' : 'hidden';
  const textDecoration = taskObject.completed ? 'line-through' : 'none';

  taskArticle.innerHTML = `
    <label class="flex items-center justify-center border border-gray-500 rounded-full cursor-pointer size-5">
      <input class="hidden peer" type="checkbox" ${taskObject.completed ? 'checked' : 'none'}>
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

  // Con esto marcamos las que tenemos hechas de tareas
  const checkbox = taskArticle.querySelector('input[type="checkbox"]');
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      markTaskCompleted(taskObject);
    } else {
      markTaskActive(taskObject);
    }
    taskArticle.querySelector('span').style.textDecoration = checkbox.checked ? 'line-through' : 'none';
  });

  // Con este boton eliminams las que queramos
  const deleteButton = taskArticle.querySelector('.delete-task');
  deleteButton.addEventListener('click', () => {
    deleteTask(taskObject);
    taskArticle.remove();
  });
}

// Con esta añadimos desde el formulario
inputForm.addEventListener('submit', (event) => {
  event.preventDefault();
  try {
    const newTask = inputTask.value.trim();
    const taskObject = addTask(newTask);
    updateTaskList(taskObject);
    inputTask.value = ''; // Siempre ponemos un ''; para limpiar el campo
  } catch (error) {
    alert(error.message); // ponemos un catch error por si hay algun error
  }
});

// Creamos tambien botones para los filtros que tenemos en el HTML
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

// Con esto eliminamos las que tengamos ya completadas
deleteCompletedBtn.addEventListener('click', () => {
  deleteCompletedTasks();
  showAllTasks(); 
});

// Mostrar las tareas que tenemos 
function showAllTasks() {
  taskListSection.innerHTML = '';
  const tasks = getTasks();
  tasks.forEach(task => updateTaskList(task));
}

// Actualizamos y mostramos todas las tareas que tenemos
document.addEventListener('DOMContentLoaded', showAllTasks);
