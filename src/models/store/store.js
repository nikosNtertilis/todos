import { configureStore } from '@reduxjs/toolkit'
import { inputTextReducer, todosReducer } from '../slices'

export default configureStore({
    reducer: {
        inputText: inputTextReducer,
        todos: todosReducer,
    }
})
