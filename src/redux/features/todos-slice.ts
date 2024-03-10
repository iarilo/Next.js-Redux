import { createSlice } from "@reduxjs/toolkit";
import { allTodos } from "../actionTodo";



interface typeTodos  {
    todos: [] | any,
    status: string | null,
   error:  null | unknown | string
 
}


const initialStateTodos: typeTodos = {
  todos: [],
  status: null,
  error: null ,
 

}

export const Todos = createSlice({
   name: 'allTodo',
   initialState: initialStateTodos,
   reducers:{},
   extraReducers:(builder) => {
    builder.addCase(allTodos.pending,(state)=>{
        (state.status = "loading"), (state.error = null)
    })
   builder.addCase(allTodos.fulfilled,(state, action )=> {
    
      (state.status = "resolved"),(state.todos = action.payload)
   })
   builder.addCase(allTodos.rejected, (state,action)=>{
   (state.status = 'rejected'), (state.error = action.payload) 
   })

   }
})

export default Todos.reducer