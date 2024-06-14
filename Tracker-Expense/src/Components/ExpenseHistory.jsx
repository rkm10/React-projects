
import { createContext, useContext, useState } from "react";
import Details from "./Details";
import { ExpenseTrackerContext } from "./MainApp";
import { Container, Input, Typography, Card } from "@mui/material";

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
                  <Container sx={{ overflow: "hidden" }}>
                        <Typography variant="h4" sx={{ textAlign: "center" }}>Transaction History</Typography>
                        <Input type="text" placeholder="Search for anything..."
                              value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                        <Card sx={{ overflowY: "scroll", height: "60vh" }}>
                              <Details />
                        </Card>
                  </Container>
            </FilteredDataContext.Provider>
      );
}
