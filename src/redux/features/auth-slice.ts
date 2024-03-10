import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { deleteTodo } from "../actionTodo";


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
  })

}


});

export const { LogIn, LogOut, togleModerator } = auth.actions;
export default auth.reducer;
