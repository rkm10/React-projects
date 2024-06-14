import { useState, useEffect, createContext, useReducer } from 'react';
import ExpenseHistory from './ExpenseHistory';
import Form from './Form';
import axios from 'axios';
import { Button, CardContent, Container, Typography } from '@mui/material';

export const ExpenseTrackerContext = createContext();

const initialState = {
      filter: "All",
      data: [],
};

const filterReducer = (state, action) => {
      switch (action.type) {
            case "SET_FILTER":
                  return { ...state, filter: action.payload };
            case "SET_DATA":
                  return { ...state, data: action.payload };
            default:
                  return state;
      }
};

function MainApp() {
      const [data, setData] = useState([]);
      const [state, dispatch] = useReducer(filterReducer, initialState);

      const url = "http://localhost:3000/Data";

      useEffect(() => {
            getData();
      }, []);

      const getData = () => {
            axios.get(url)
                  .then((res) => {
                        setData(res.data);
                        dispatch({ type: "SET_DATA", payload: res.data });
                  })
                  .catch((err) => {
                        console.log(err);
                  });
      };

      const deleteData = (id) => {
            axios.delete(`${url}/${id}`)
                  .then(() => {
                        getData();
                  })
                  .catch((err) => {
                        console.log(err);
                  });
      };

      const addData = (data) => {
            axios.post(url, data, {
                  headers: {
                        "Content-Type": 'application/json'
                  }
            }).then(() => {
                  getData();
            })
                  .catch((err) => {
                        console.log(err);
                  });
      };

      const handleFilterChange = (e) => {
            dispatch({ type: "SET_FILTER", payload: e.target.value });
      };

      const filteredData = state.data.filter((item) => {
            if (state.filter === "All") {
                  return true;
            } else if (state.filter === "Income") {
                  return item.amount > 0;
            } else if (state.filter === "Expense") {
                  return item.amount < 0;
            } else {
                  return true;
            }
      });

      const totalBalance = state.data.reduce((total, item) => total + Number(item.amount), 0);

      const card = (
            <CardContent sx={{ bgcolor: "#f5f5f5", width: "50%" }}>
                  <Form />
            </CardContent>
      )

      const card1 = (
            <CardContent sx={{ bgcolor: "#f5f5f5", width: "50%" }}>
                  <ExpenseHistory />
            </CardContent>
      )



      return (
            <ExpenseTrackerContext.Provider value={{ data, filteredData, deleteData, addData, handleFilterChange }}>
                  <CardContent sx={{ textAlign: "center" }}>
                        <Typography variant="h5" component="div">
                              Expense Tracker
                        </Typography>
                        <Button size="small" onClick={() => handleFilterChange({ target: { value: "All" } })}>Account Balance: ₹ {totalBalance}</Button>
                  </CardContent>
                  <Container sx={{ display: "flex", width: "100vw", justifyContent: "center", height: "70vh", gap: "30px" }}>
                        {card}{card1}
                  </Container>
            </ExpenseTrackerContext.Provider>
      );
}

export default MainApp;
