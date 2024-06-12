
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
                        <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 
                        shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-96 mb-7 text-black font-family: italic font-semibold"
                              placeholder="Search for anything..." type="text" name="search" alue={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)} />

                        <div className="w-full overflow-y-scroll overflow-x-hidden px-5" style={{ height: "100vh" }}>

                              <Details />

                        </div>
                  </div>
            </FilteredDataContext.Provider>
      );
}
