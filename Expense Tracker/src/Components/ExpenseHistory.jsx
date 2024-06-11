import { createContext, useContext, useReducer } from "react";
import Details from "./Details";
import { ExpenseTrackerContext } from "../MainApp";

export const FilteredDataContext = createContext();

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

export default function ExpenseHistory() {
      const { data, deleteData } = useContext(ExpenseTrackerContext);
      const [state, dispatch] = useReducer(filterReducer, initialState);

      const handleFilterChange = (e) => {
            dispatch({ type: "SET_FILTER", payload: e.target.value });
      };

      const filteredData = data.filter((item) => {
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

      return (
            <FilteredDataContext.Provider value={{ filteredData, deleteData, handleFilterChange }}>
                  <div className="flex card w-5/12 shadow-xl items-center gap-3 py-5 border-2 border-white" style={{ height: "60vh" }}>
                        <h1 className="card-title mb-6">Transaction History</h1>
                        <select value={state.filter} onChange={handleFilterChange}>
                              <option value="All">All</option>
                              <option value="Income">Income</option>
                              <option value="Expense">Expense</option>
                        </select>
                        <div className="w-full overflow-y-scroll overflow-x-hidden px-5" style={{ height: "100vh" }}>
                              <Details />
                        </div>
                  </div>
            </FilteredDataContext.Provider>
      );
}
