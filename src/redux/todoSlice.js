import { createSlice } from '@reduxjs/toolkit';

function getTodosFromLocalStorage() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

function saveTodosToLocalStorage(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: getTodosFromLocalStorage(),
  },
  reducers: {
    addTodo: (state, action) => {
      state.items = [...state.items, action.payload];
      saveTodosToLocalStorage(state.items);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveTodosToLocalStorage(state.items);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      state.items = state.items.map((item) =>
        item.id === id ? { ...item, text } : item
      );
      saveTodosToLocalStorage(state.items);
    },
    clearAllTodos: (state) => {
      state.items = [];
      saveTodosToLocalStorage([]);
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, updateTodo, clearAllTodos } =
  todoSlice.actions;
