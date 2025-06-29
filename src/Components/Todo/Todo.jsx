import { useReducer, useState } from "react";
import TodoList from "../TodoList/TodoList";

import './Todo.css';
import AddTodo from "../AddTodo/AddTodo";

import TodoContext from "../../contexts/TodoContext";
import TodoReducer from "../../reducers/TodoReducer";


function Todo() {
    const [editMode, setEditMode] = useState(false);
    const [todos, dispatch] = useReducer(TodoReducer, []);
    

    return (
        <div className="todo">

            <TodoContext.Provider value = { { todos, dispatch, editMode, setEditMode } } >
                <AddTodo />
                <TodoList />
            </TodoContext.Provider>
            
        </div>
    )
}

export default Todo;
