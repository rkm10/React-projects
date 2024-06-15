import { createSlice, configureStore } from "@reduxjs/toolkit";


const state = {
      balance: 0,
      fullName: "",
      mobile: null,
}

const transactions = []
const userSlice = createSlice(
      {
            name: "user",
            initialState: state,
            reducers: {
                  updateMobile: (state, action) => {
                        state.mobile = action.payload
                  },
                  updateName: (state, action) => {
                        state.fullName = action.payload
                  },
                  withdraw: (state, action) => {
                        state.balance = state.balance - action.payload
                        // state.balance-=action.payload
                  },
                  deposit: (state, action) => {
                        state.balance = state.balance + +action.payload
                        // state.balance+= +action.payload
                  }
            }
      }
)

const transactionsSlice = createSlice({
      name: 'transactions',
      initialState: transactions,
      reducers: {
            addTransaction: (state, action) => {
                  state.push(action.payload)
            }
      }
})

// console.log(userSlice);
const store = configureStore({
      reducer: {
            user: userSlice.reducer,
            transaction: transactionsSlice.reducer
      },
})

export default store;

export const { updateMobile, updateName, withdraw, deposit } = userSlice.actions
export const { addTransaction } = transactionsSlice.actions