import { useContext, useState } from 'react';
import Transactions from './Transactions';
import { ExpenseTrackerContext } from './MainApp';
import { Container, Button, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


function Form() {
      const { addData } = useContext(ExpenseTrackerContext);
      const [formData, setFormData] = useState({
            expensedetails: '',
            amount: ''
      });

      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            const trimmedDetails = formData.expensedetails.trim();
            const trimmedAmount = formData.amount.trim();

            if (!trimmedDetails || !trimmedAmount) {
                  alert("Please enter valid details!");
                  return;
            }
            const expense = {
                  ...formData,
                  date: new Date().toLocaleDateString(),
                  time: new Date().toLocaleTimeString()
            };
            addData(expense);
            setFormData({
                  expensedetails: '',
                  amount: ''
            });
      };

      return (<>
            <Container sx={{ display: "flex", flexDirection: 'column' }}>
                  <Transactions />
                  <FormControl sx={{ mt: 5 }} >
                        <InputLabel htmlFor="my-input">Expense details</InputLabel>
                        <Input id="my-input"
                              type="text"
                              name="expensedetails"
                              placeholder="Expense Details"
                              value={formData.expensedetails}
                              onChange={handleChange} />
                  </FormControl>
                  <FormControl sx={{ mt: 5 }}>
                        <InputLabel htmlFor="my-amount">Amount</InputLabel>
                        <Input id="my-amount"
                              type="number"
                              name="amount"
                              placeholder="Amount"
                              value={formData.amount}
                              onChange={handleChange} />
                  </FormControl>
                  <FormHelperText id="my-helper-text">Add the details.</FormHelperText>
                  <Button variant='contained' type="submit" size='large' color='success' endIcon={<SendIcon />} onClick={handleSubmit} className="btn btn-ghost btn-wide">Add</Button>
            </Container>
      </>
      );
}

export default Form;
