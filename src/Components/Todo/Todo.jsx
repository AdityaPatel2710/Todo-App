import { useState } from "react";
import TodoList from "../TodoList/ToDoList";

import './Todo.css';
import AddTodo from "../AddTodo/AddTodo";

import TodoContext from "../../contexts/TodoContext";


function Todo() {
    const [todos, setTodos] = useState([]);
    const [editMode, setEditMode] = useState(false);
    

    return (
        <div className="todo">

            <TodoContext.Provider value = { { todos, setTodos, editMode, setEditMode } } >
                <AddTodo />
                <TodoList />
            </TodoContext.Provider>
            
        </div>
    )
}

export default Todo;
