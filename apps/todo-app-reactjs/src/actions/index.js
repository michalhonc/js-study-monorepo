export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const CHANGE_STATUS = 'CHANGE_STATUS';

export function addTodo(todo) {
   
   console.log(todo)
   return {
      type: ADD_TODO,
      payload: todo
   };
}

export function removeTodo(todo, item) {
   return {
      type: REMOVE_TODO,
      payload: todo,
      toDelete: item
   }
}

export function changeStatus(todo, item) {
   return {
      type: CHANGE_STATUS,
      payload: todo,
      toChange: item
   }
}