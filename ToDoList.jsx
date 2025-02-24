import React, { useRef, useState } from 'react';
import './App.css';

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const handelAddTodo = () => {
    const text = inputRef.current.value.trim(); 
    if(text !== "")  { 
      const newItem = { completed: false, text };
      setTodos([...todos, newItem]);
      inputRef.current.value = "";
    }

  };

  const handelItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

   
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handelAddTodo();
    }
  };

  const handelDeletItem = (index) =>   {
    const newTodos = [...todos]; 
    newTodos.splice(index,1) ; 
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <h2>To Do list</h2>
      <div className="to-do-container">
        <ul>
          {todos.map(({ text, completed }, index) => (
            <div className='conatiner-li'>
            <li
              key={index}
              onClick={() => handelItemDone(index)}
              style={{ textDecoration: completed ? "line-through" : "none" }}
            >
              {text}
            </li>
            <span className='deleteItem' onClick={() => handelDeletItem(index)}> ❌</span>
            </div>
          ))}
        </ul>
        <input ref={inputRef} type="text" placeholder="Enter Text......" onClick={handleKeyDown}/>
        <button onClick={handelAddTodo}>Add</button>
      </div>
    </div>
  );
}

export default ToDoList;
