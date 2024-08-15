import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    add: (state, action) => {
      const { id, item } = action.payload;

      state.push({ id: id, item: item });
    },
    deleteItem: (state, action) => {
      console.log("from store", action.payload);

      const i = state.find((item) => item.id === action.payload);
      if (i) {
        return state.filter((item) => item.id !== action.payload);
      }
    },
    updateTodo:(state,action)=>{
      const {id,item}=action.payload
     const todo= state.find(f=>f.id===id)
     if(todo){
      todo.item=item
     }

    }
  },
});

export const { add, deleteItem ,updateTodo} = todoSlice.actions;
export default todoSlice.reducer;
