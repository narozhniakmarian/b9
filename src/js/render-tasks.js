
import { refs } from './refs.js';
import { deleteTask } from './tasks.js';
import { getTaskMarkup } from './markup-tasks.js';


export function renderTask(task) {
    const markup = getTaskMarkup(task);
    refs.taskList.insertAdjacentHTML('beforeend', markup);

    const inserted = refs.taskList.lastElementChild;

    inserted.querySelector('.task-list-item-btn').addEventListener('click', () => {
        deleteTask(task.id);
        inserted.remove();
    });
}

export function renderAllTasks(tasks) {
    refs.taskList.innerHTML = '';
    tasks.forEach(renderTask);
}