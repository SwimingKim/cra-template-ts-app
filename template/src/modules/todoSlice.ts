import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { requestTodo, TodoItemType } from "../api";

type TodoState = {
  status: string;
  entities: TodoItemType[];
};

const initialState: TodoState = {
  status: "",
  entities: [],
};

let nextId = 1;
export const githubSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.entities = state.entities.concat({
        id: nextId++,
        userId: 0,
        title: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      state.entities = state.entities.map((todo: TodoItemType) =>
        todo.id === action.payload ? { ...todo, done: !todo.completed } : todo
      );
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.entities = state.entities.filter(
        (todo: TodoItemType) => todo.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodoThunk.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getTodoThunk.fulfilled, (state, action) => {
        state.entities = state.entities.concat(action.payload);
        state.status = "idle";
      })
      .addCase(getTodoThunk.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export const getTodoThunk = createAsyncThunk("todos/requestTodo", async () => {
  const response = await requestTodo(100);
  return response;
});

const { actions, reducer } = githubSlice;
export const { addTodo, toggleTodo, removeTodo } = actions;
export default reducer;
