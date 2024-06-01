import "./App.css";
import React, { useState } from "react";

function App() {
      let [todoinput, updateinput] = useState("");

      let [todoList, updateTodo] = useState([
            {
                  id: 1,
                  task: "Learn React",
            },

            {
                  id: 2,
                  task: "Master React in 10 days",
            },
      ]);
      const [isEditable, setIsEdiatable] = useState("");

      let nextId = new Date().getUTCMilliseconds();

      function addnewtodo() {
            if (todoinput === "") {
                  alert("type something to add");
            } else {
                  updateTodo([
                        ...todoList,
                        {
                              id: nextId,
                              task: todoinput,
                        },
                  ]);
                  updateinput("")
            }
      }

      console.log()

      function deletetodo(id) {
            let updatedtods = todoList.filter((todo) => {
                  return todo.id != id;
            });
            updateTodo(updatedtods);
      }

      function updateTasks(id) {
            setIsEdiatable(id);

      }

      const saveTodo = () => {
            setIsEdiatable("");
      }

      return (
            <div className="container mt-5 w-50">
                  <h3 className="text-center">To-Do App using React</h3>
                  <div className="input-group">
                        <input className="form-control" type="text" value={todoinput} onChange={(e) => { let task = e.target.value; updateinput(task); }} />
                        <button onClick={addnewtodo} className="btn btn-primary"> Add </button>
                  </div>
                  <ul className="list-group mt-4">
                        {todoList.map((todo) => {
                              return (
                                    <li className="list-group-item" key={todo.id}>
                                          <p contentEditable={isEditable === todo.id} style={{ border: isEditable === todo.id ? "2px solid black" : '' }} id={todo.id}>{todo.task}</p>
                                          {isEditable === todo.id ? <button onClick={saveTodo}>🌎</button> : <button onClick={() => { updateTasks(todo.id) }} > 🥖</button >}
                                          {isEditable === todo.id ? null : < button onClick={() => { deletetodo(todo.id) }}>❌</button>}
                                    </li>
                              );
                        })}
                  </ul>
            </div>
      );
}

export default App;
