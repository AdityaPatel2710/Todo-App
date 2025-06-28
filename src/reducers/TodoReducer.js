function TodoReducer(state, action) {

    if(action.type == "add_todo") {
        return ( [  {
                        id: Date.now(),
                        data: action.payload.newTodo
                    }, 
                    ...state
                ] );
    }

    else if(action.type == "edit_todo") {
        let newTodos = state.map((todo) => {
            if(todo.id == action.payload.id) todo.data = action.payload.newTodo;
            return todo;
        })
        return newTodos;
    }

    else if(action.type == "delete_todo") {
        return state.filter((todo) => (todo.id != action.payload.id));
    }

    else if(action.type == "reset_todos") {
        return [];
    }

    return state;
}


export default TodoReducer;
