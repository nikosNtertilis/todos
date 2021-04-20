import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "../fetchTodos";

const updateTodos = createAsyncThunk(
    'todos/updateTodosStatus',
    fetchTodos
)

const todosSlice = createSlice({
    name: 'todos',
  initialState: {
    value: [],
  },
  reducers: {
    
  },
  extraReducers: {
    [updateTodos.fulfilled]: (state, action) => {
        state.value = action.payload
    },
  },

});

// export const { updateTodos } = todosSlice.actions;

export {
    updateTodos,
}
export default todosSlice.reducer;