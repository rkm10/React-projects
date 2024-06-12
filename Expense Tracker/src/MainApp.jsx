import { useState, useEffect, createContext, useReducer } from 'react';
import ExpenseHistory from './Components/ExpenseHistory';
import Form from './Components/Form';
import axios from 'axios';

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

      return (
            <ExpenseTrackerContext.Provider value={{ data, filteredData, deleteData, addData, handleFilterChange }}>
                  <div className="flex flex-col items-center gap-5 pt-12" style={{ height: "80vh" }}>
                        <h1 className="card-title">Expense Tracker</h1>
                        <h2 className="text-white font-bold text-3xl" onClick={() => handleFilterChange({ target: { value: "All" } })} >Account Balance: ₹ {totalBalance}</h2>
                        <div className="container flex justify-center gap-3">
                              <Form />
                              <ExpenseHistory />
                        </div>
                  </div>
            </ExpenseTrackerContext.Provider>
      );
}

export default MainApp;
