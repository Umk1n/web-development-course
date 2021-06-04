const todos = [];

// функции для работы с состоянием приложения

// добавление новой задачи
function addTodo(todo) {
  todos.push(todo);
}

// выполнение задачи или отмена выполнения
function toggleCompleteTodo(todoId, checked) {
  const todo = todos.find((todo) => todo.id === todoId);
  todo.completed = checked;
}
module.exports = {
  todos,
  addTodo,
  toggleCompleteTodo,
}