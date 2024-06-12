
import { createContext, useContext, useState } from "react";
import Details from "./Details";
import { ExpenseTrackerContext } from "../MainApp";

export const FilteredDataContext = createContext();

export default function ExpenseHistory() {
      const { filteredData, deleteData } = useContext(ExpenseTrackerContext);
      const [searchQuery, setSearchQuery] = useState("");
      // console.log(filteredData);

      const filteredTransactions = filteredData.filter((transaction) =>
            transaction.expensedetails.includes(searchQuery.toLowerCase()) || transaction.amount.includes(searchQuery.toLowerCase())
      );

      return (
            <FilteredDataContext.Provider value={{ filteredTransactions, deleteData }}>
                  <div className="flex card w-5/12 shadow-xl items-center gap-3 py-5 border-2 border-white" style={{ height: "60vh" }}>
                        <h1 className="card-title mb-6">Transaction History</h1>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)} />

                        <div className="w-full overflow-y-scroll overflow-x-hidden px-5" style={{ height: "100vh" }}>

                              <Details />

                        </div>
                  </div>
            </FilteredDataContext.Provider>
      );
}
