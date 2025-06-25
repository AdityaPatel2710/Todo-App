import { useState } from "react";
import TodoList from "../TodoList/ToDoList";
import TodoListItem from "../TodoListItem/TodoListItem";

import './Todo.css';


let count = 0;

function Todo() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [currEditing, setCurrEditing] = useState(0);

    function deleteTodo(id) {
        let remainingTodos = items.filter((item) => (item.id != id));
        setItems(remainingTodos);
    }

    function editTodo(id, newTodo) {
        let newTodos = items.map((item) => {
            if(item.id == id) item.data = newTodo;
            return item;
        })
        setItems(newTodos);
    }

    function onEditMode() {
        setEditMode(true);
        setCurrEditing(currEditing + 1);
    }

    function offEditMode() {
        if(currEditing == 1) setEditMode(false);
        setCurrEditing(currEditing - 1);
    }

    return (
        <div className="todo">
            <input 
                type = "text"
                value = {newItem} 
                onChange = {(Event) => setNewItem(Event.target.value)} 
            />
            &nbsp; &nbsp;

            <button 
                onClick = {() => setItems([...items, {data: newItem, id: count++}])}
                disabled = {(editMode) ? true : false}
            >
                Add ToDo 
            </button>
            &nbsp;

            <button 
                onClick = {() => {
                    count = 0;
                    setNewItem("");
                    setItems([]); 
                }}
                disabled = {((items.length == 0) || editMode) ? true : false}
            > 
                Reset ToDo 
            </button>

            { /** <ToDoList todos={ items }/> */}

            <ul>
                {items.map(
                    (todo) => <TodoListItem 
                                        todo = {todo.data} 
                                        id = {todo.id}
                                        key = {todo.id} 
                                        delete = {deleteTodo} 
                                        edit = {editTodo}
                                        onEditMode = {onEditMode}
                                        offEditMode = {offEditMode}
                                    />
                )}
            </ul>

        </div>
    )
}

export default Todo;
