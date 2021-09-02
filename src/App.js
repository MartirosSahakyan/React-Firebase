import { useEffect, useState } from "react";
import {
  addTodo,
  deleteTodo,
  completeTodo,
  getTodos,
  editTodo,
} from "./services/todo.service";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState();
  
  const handleInputChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const handleAddTodo = () => {
    addTodo(inputValue);
    setInputValue("");
    getTodos().then((res) => {
      setTodoList(res);
    });
  };

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
    getTodos().then((res) => {
      setTodoList(res);
    });
  };

  const handleCompleteTodo = (data) => {
    completeTodo(data);
    getTodos().then((res) => {
      setTodoList(res);
    });
  };
  
  const handleEditTodo = (data) => {
    editTodo(data);
    getTodos().then((res) => {
      setTodoList(res);
    });
  };

  
  
  useEffect(() => {
    getTodos().then((res) => {
      setTodoList(res);
    });
  }, []);

  return (
    <div>
      <input
        onChange={handleInputChange}
        value={inputValue}
        placholder="add todo"
      />
      <button onClick={handleAddTodo}>add todo</button>
      <div>
        {todoList
          ? todoList.map((todo) => {
              return (
                <div key={todo.id}>
                  {todo.isEdit ? (
                    <input type="text" />
                  ) : (
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => handleCompleteTodo(todo)}
                    >
                      {todo.title}
                    </span>
                  )}
                  {todo.isEdit ? <button>Save</button> : <button onClick={() => handleEditTodo(todo)}>Edit</button>}

                  <button onClick={() => handleDeleteTodo(todo.id)}>
                    Delete
                  </button>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default App;
