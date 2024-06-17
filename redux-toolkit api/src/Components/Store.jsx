// import { Typography } from "@mui/material";
import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialData = {
      users: [],
      status: '',
      error: false,
}

// dispatch(fetchUsers())

export let fetchUsers = createAsyncThunk('user/fetch', async () => {
      try {
            const response = await axios.get('http://localhost:4000/Data');
            return response.data;
      }
      catch (error) {
            throw error;
      }



      // try {
      //       const response = await fetch('http://localhost:4000/Data');
      //       const data = await response.json();
      //       console.log(data);
      //       return data;
      // }
      // catch (error) {
      //       throw error
      // }
})




let userSlice = createSlice({
      name: 'user',
      initialState: initialData,
      reducers: {
            fetchUsersData: (state, action) => {

            }
      },
      extraReducers: (builder) => {
            builder.addCase(fetchUsers.pending, (state) => {
                  state.status = 'loading'
            })
                  .addCase(fetchUsers.fulfilled, (state, action) => {
                        state.status = 'Compeleted',
                              state.users = action.payload
                  })
                  .addCase(fetchUsers.rejected, (state, action) => {
                        state.status = 'failed',
                              state.users = [],
                              state.error = action.error.message
                  })
      }
})

const store = configureStore({
      reducer: {
            user: userSlice.reducer
      }
})

export default store;
