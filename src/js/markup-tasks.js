
export function getTaskMarkup(task) {
    return `
    <li class="task-list-item" data-id="${task.id}">
    <button class="task-list-item-btn">Delete</button>
      <h3>${task.title}</h3>
      <p>${task.text}</p>
    </li>
  `;
}
