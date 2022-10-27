import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../common/apiRoutes/routes";
import { fetchTodoLists } from "../../service/services";
import { TodoInitialState, TodoLists } from "../../types/types";

const initialState: TodoInitialState = {
  loading: false,
  subLoading: false,
  todoLists: [],
  singleTodoList: null,
};

export const GET_ALL_TODOLISTS = createAsyncThunk(
  "GetAllEmployeesTimeTable",
  async () => {
    try {
      return await fetchTodoLists(API.GET_TODOS);
    } catch (error) {
      return error;
    }
  }
);
export const GET_SINGLE_TODOLIST = createAsyncThunk(
  "GetSingleEmployeesTimeTable",
  async (id: number) => {
    try {
      return await fetchTodoLists(`${API.GET_TODOS}/${id}`);
    } catch (error) {
      return error;
    }
  }
);

export const todoListsSlice = createSlice({
  name: "todoListsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GET_ALL_TODOLISTS.pending, (state) => {
        state.loading = true;
      })
      .addCase(GET_ALL_TODOLISTS.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.todoLists = payload;
      })
      .addCase(GET_ALL_TODOLISTS.rejected, (state) => {
        state.loading = false;
      })
      .addCase(GET_SINGLE_TODOLIST.pending, (state) => {
        state.subLoading = true;
      })
      .addCase(GET_SINGLE_TODOLIST.fulfilled, (state, { payload }) => {
        state.singleTodoList = payload;
        state.subLoading = false;
      })
      .addCase(GET_SINGLE_TODOLIST.rejected, (state) => {
        state.subLoading = false;
      });
  },
});
export default todoListsSlice.reducer;
