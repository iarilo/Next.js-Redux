import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState, AppDispath } from "@/redux/store";
import { LogOut } from "./features/auth-slice";
import axios from "axios";

// Типы для createAsyncThunk
//  AppDispath  это  тип   AppDispath = typeof storeConfig.dispatch   из  store;
//  RootState это тип  RootState = ReturnType<typeof storeConfig.getState>  из store;

/*
const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState
  dispatch: AppDispath
  rejectValue: string
  extra: { s: string; n: number },
  
}>()
*/

// Получение

/*
  export const allTodos = createAsyncThunk(
  'allTodos/todos',
  async function (_, {rejectWithValue}) {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      if (!response.ok) {
        throw new Error('даннные не пришли')
      }
       const data = await response.json()
       return data
    } catch (error: any ) {
         return rejectWithValue(error.message)
    }
  }
)

*/

export const allTodos = createAsyncThunk(
  "allTodos/todos",
  async function (_, { rejectWithValue }) {
    try {
      const dataResponse = await axios
        .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then(function (response) {
          return [...response.data];
        })
        .catch((error) => {
          console.log("ERROR: ", error);
        });

      return dataResponse;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Удаление
export const deleteTodo = createAsyncThunk(
  "deleteTodo/todos",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        throw new Error("Удаление не удалось, ошибка сервера");
      }
      dispatch(LogOut());
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
