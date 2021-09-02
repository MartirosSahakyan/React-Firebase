// const BASE_URL = 'https://react-firebase-acf4a-default-rtdb.firebaseio.com/'

import { db } from "../libs/firebase.libs";

export function addTodo(title) {
  db.ref("/todos/").push({
    title,
    completed: false,
    isEdit: false,
  });
}

export function getTodos() {
  const listTodos = [];
  return new Promise((resolve) => {
    db.ref("/todos/").once('value', (snapshot) => {
      snapshot.forEach((el) => {
        listTodos.push({
          completed: el.val().completed,
          title: el.val().title,
          id: el.key,
          isEdit: el.val().isEdit,
        });
      });
      resolve(listTodos);
    });
  });
}

export function deleteTodo(id) {
    db.ref('/todos/' + id).remove()
}

export function completeTodo({id,completed}) {
    db.ref('/todos/').child(id).update({
        completed: !completed
    })
}

export function editTodo({id,isEdit}) {
    db.ref('/todos/').child(id).update({
        isEdit: !isEdit
    })
}