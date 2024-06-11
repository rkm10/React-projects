import { useState, useEffect, createContext } from 'react';
import ExpenseHistory from './Components/ExpenseHistory';
import Form from './Components/Form';
import axios from 'axios';

export const ExpenseTrackerContext = createContext();

function MainApp() {
      const [data, setData] = useState([]);
      const url = "http://localhost:3000/Data";

      useEffect(() => {
            getData();
      }, []);

      const getData = () => {
            axios.get(url)
                  .then((res) => {
                        setData(res.data);
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

      const totalBalance = data.reduce((total, item) => total + Number(item.amount), 0);

      return (
            <ExpenseTrackerContext.Provider value={{ data, deleteData, addData }}>
                  <div className="flex flex-col items-center gap-5 pt-12" style={{ height: "80vh" }}>
                        <h1 className="card-title">Expense Tracker</h1>
                        <h2 className="text-white font-bold text-3xl">Account Balance: ₹ {totalBalance}</h2>

                        <div className="container flex justify-center gap-3">
                              <Form />
                              <ExpenseHistory />
                        </div>
                  </div>
            </ExpenseTrackerContext.Provider>
      );
}

export default MainApp;
