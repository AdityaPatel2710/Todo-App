import { useState } from "react";
import TodoList from "../TodoList/ToDoList";

import './Todo.css';
import AddTodo from "../AddTodo/AddTodo";


function Todo() {
    const [items, setItems] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [currEditing, setCurrEditing] = useState(0);

    function addNewTodo(newTodo) {
        setItems( [ {
                        id: Date.now(),
                        data: newTodo
                    }, 
                    ...items] 
                );
    }

    function resetTodo() {
        setItems([]);
    }

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

            {/** <---------- AddTodo ----------> */}
            <AddTodo 
                onAdd = {addNewTodo}
                editMode = {editMode}
                onReset = {resetTodo}
                isTodoEmpty = {items.length == 0}
            />
            {/** <---------- AddTodo ----------> */}

            {/** <---------- TodoList ----------> */}
            <TodoList 
                todos = {items}
                onDelete = {deleteTodo} 
                onEdit = {editTodo}
                onEditMode = {onEditMode}
                offEditMode = {offEditMode}
            />
            {/** <---------- TodoList ----------> */}

        </div>
    )
}

export default Todo;
