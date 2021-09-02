import { useEffect, useState } from "react";
import { addTodo, deleteTodo, editTodo, getTodos } from "./services/todo.service";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState();

  const handleInputChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const handleAddTodo = () => {
    addTodo(inputValue);
    setInputValue("");
    getTodos().then((res)=>{
      setTodoList(res)
    })
  };

  const handleDeleteTodo = (id) => {
    deleteTodo(id)
    getTodos().then((res)=>{
      setTodoList(res)
    })
  }

  const handleEditTodo = (id) => {
    editTodo(id)
    getTodos().then((res)=>{
      setTodoList(res)
    })
  }

  useEffect(() => {
    getTodos().then((res)=>{
      setTodoList(res)
    })
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
          ? todoList.map((todo,index) => {
              return (
                <p key={index}>
                  {todo.todo}
                  <button onClick={(id)=>handleEditTodo(todo.id)}>Edit</button>
                  <button onClick={(id)=>handleDeleteTodo(todo.id)}>Delete</button>
                </p>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default App;
