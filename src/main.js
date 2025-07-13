


import { refs } from './js/refs.js';
import { loadTasks, loadTheme, saveTheme } from './js/local-storage-api.js';
import { getTasks, addTask } from './js/tasks.js';
import { renderTask, renderAllTasks } from './js/render-tasks.js';



const currentTheme = loadTheme();
if (currentTheme === 'dark') {
  refs.body.classList.add('dark');
}

refs.themeToggle.addEventListener('click', () => {
  if (document.body.classList.contains('theme-dark')) {
    document.body.classList.remove('theme-dark');
    document.body.classList.add('theme-light');
    saveTheme('light');
  } else {
    document.body.classList.remove('theme-light');
    document.body.classList.add('theme-dark');
    saveTheme('dark');
  }

});


const savedTasks = loadTasks();
savedTasks.forEach(task => getTasks().push(task));
renderAllTasks(getTasks());


refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const title = refs.titleInput.value.trim();
  const text = refs.textInput.value.trim();


  if (!title || !text) {
    alert('Введіть і назву, і текст завдання.');
    return;
  }

  const newTask = addTask(title, text);
  renderTask(newTask);
  refs.titleInput.value = '';
  refs.textInput.value = '';
});
