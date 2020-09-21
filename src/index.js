import './styles.css';
import { TodoList, Todo } from './classes'; //si no indicamos otra cosa busca index.js por defecto
import { crearTodoHTML } from './js/componentes';

// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';



export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHTML(todo));

// console.log('todos', todoList.todos);


// todoList.todos.forEach( crearTodoHTML); si solo es un argumento asi funciona

// const tarea = new Todo('Aprender Js');
// const tarea2 = new Todo('Comprar un unicornio');

// todoList.nuevoTodo(tarea);
// tarea.completado = true;
// todoList.nuevoTodo(tarea2);
// console.log(todoList);
// crearTodoHTML(tarea);
// localStorage.setItem('mi-key', 'ABC123');

// setTimeout(() => {
//     localStorage.removeItem('mi-key');
// }, 1500)