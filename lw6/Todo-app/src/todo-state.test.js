const {todos, addTodo, toggleCompleteTodo} = require('./todo-state.js');

test('Test addTodo', () => {
  addTodo({id:1, completed:false, text:'string'});
  expect(todos[0].text).toBe('string');
});
test('Test toggleCompleteTodo', () => {
  toggleCompleteTodo(1,true);
  expect(todos[0].completed).toBe(true);
})