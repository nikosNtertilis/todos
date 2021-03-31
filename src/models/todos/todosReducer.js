import {
    fetchTodos,
  } from "./todosActions";

const initialState = {
    todosArr: [],
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case fetchTodos.type: {
            const asyncFetchTodos = async () => {
                const response = await fetch(
                `https://jsonplaceholder.typicode.com/todos?${action.inputText}`
                );
                const json = await response.json();
                return json;
            }
            return {
                ...state,
                todosArr: asyncFetchTodos(),
            }
        }
        
        default: {
            return state;
        }
    }
}

export {
    todosReducer,
    initialState,
};