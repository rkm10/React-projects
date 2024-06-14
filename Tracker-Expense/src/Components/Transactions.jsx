import { useContext } from 'react';
import { ExpenseTrackerContext } from './MainApp';
import { Container, Typography } from '@mui/material';
import { CardContent } from '@mui/material';

export default function Transactions() {
      const { data, handleFilterChange } = useContext(ExpenseTrackerContext);

      const totalIncome = data.reduce((total, item) => total + (Number(item.amount) > 0 ? Number(item.amount) : 0), 0);
      const totalExpense = data.reduce((total, item) => total + (Number(item.amount) < 0 ? Number(item.amount) : 0), 0);


      const card = (
            <CardContent sx={{ width: "50%" }} onClick={() => handleFilterChange({ target: { value: "Income" } })}>
                  <Typography>Total Income</Typography>
                  <Typography>₹ {totalIncome}</Typography>
            </CardContent>
      )

      const card1 = (
            <CardContent sx={{ width: "50%" }} onClick={() => handleFilterChange({ target: { value: "Expense" } })}>
                  <Typography>Total Expense</Typography>
                  <Typography>₹ {totalExpense}</Typography>
            </CardContent>
      )

      return (
            <Container sx={{ display: "flex", padding: "0px !important" }}>
                  {card}{card1}
            </Container>
      );
}
