import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    data: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.data.push({ todo: action.payload , status : false, count : 0});
    },
    removeTodo: (state, action) => {
      state.data = state.data.filter((_, key) => key != action.payload);
    },
    completeTodo: (state, action) => {
        state.data = state.data.map((item, key) => key == action.payload ? {...item, status : !item.status} : item)
    },
    incTodo: (state, action) => {
        state.data = state.data.map((item, key) => key == action.payload ? {...item, count : item.count+1} : item)
    }, 
  },    
});

export const { addTodo, removeTodo, completeTodo, incTodo  } = todoSlice.actions;

export default todoSlice.reducer;
