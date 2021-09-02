// const BASE_URL = 'https://react-firebase-acf4a-default-rtdb.firebaseio.com/'

import { db } from "../libs/firebase.libs";

export function addTodo(todo) {
  db.ref("/todos/").push({
    todo,
    completed: false,
  });
}

export function getTodos() {
  const listTodos = [];
  return new Promise((resolve) => {
    db.ref("/todos/").once('value', (snapshot) => {
      snapshot.forEach((el) => {
        listTodos.push({
          completed: el.val().completed,
          todo: el.val().todo,
          id: el.key,
        });
      });
      resolve(listTodos);
    });
  });
}

export function deleteTodo(id) {
    db.ref('/todos/' + id).remove()
}

export function editTodo(id) {
    db.ref('/todos/').child(id).update({
        completed: true
    })
}