import { nanoid } from 'nanoid';
import { saveTasks } from './local-storage-api.js';

let tasks = [];

export function getTasks() {
    return tasks;
}

export function addTask(title, text) {
    const newTask = {
        id: nanoid().toString(),
        title,
        text,
    };
    tasks.push(newTask);
    saveTasks(tasks);
    return newTask;
}

export function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks(tasks);
}