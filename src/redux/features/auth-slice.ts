import { createSlice, PayloadAction,createAsyncThunk } from "@reduxjs/toolkit";
import { RootState,AppDispath } from "../store";



//  ..................................
// Типы для createAsyncThunk 
//  AppDispath  это  тип   AppDispath = typeof storeConfig.dispatch   из  store;
//  RootState это тип  RootState = ReturnType<typeof storeConfig.getState>  из store; 
const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState
  dispatch: AppDispath
  rejectValue: string
  extra: { s: string; n: number }
}>()
// Удаление 
export const deleteTodo = createAppAsyncThunk(
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

// ....................................

type AuthState = {
  username: string;
  isAuth: boolean;
  userId: string | number;
  isModerator: boolean;
  status: string;
  error: string
};

type InitionState = {
  value: AuthState;
};

const InitialState = {
  value: {
    username: "",
    isAuth: false,
    userId: "",
    isModerator: false,
    status: '',
    //error: ''
  } as AuthState,
} as InitionState;

const auth = createSlice({
  name: "auth",
  initialState: InitialState,
  reducers: {
    LogIn: (state, action: PayloadAction<string>) => {
      return {
        value: {
          username: action.payload,
          isAuth: true,
          userId: "1",
          isModerator: false,
          status: '',
          error: ''
        },
      };
    },

    LogOut: () => {
      return InitialState;
    },

    togleModerator: (state) => {
      state.value.isModerator = !state.value.isModerator;
    },
  },
extraReducers: (builder) => {
  builder.addCase(deleteTodo.rejected,(state)=>{
    (state.value.status = "rejected");
  });
}


});

export const { LogIn, LogOut, togleModerator } = auth.actions;
export default auth.reducer;
