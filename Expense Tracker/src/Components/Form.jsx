import { useContext, useState } from 'react';
import Transactions from './Transactions';
import { ExpenseTrackerContext } from '../MainApp';

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

      return (
            <div className="flex card w-5/12 shadow-xl items-center gap-5 p-5 border-2 border-white" style={{ height: "60vh" }}>
                  <Transactions />
                  <h2 className="card-title mb-6">Add Expense</h2>
                  <form className="w-full">
                        <input
                              type="text"
                              name="expensedetails"
                              placeholder="Expense Details"
                              className="w-full h-12 shadow-xl items-center px-3 mb-3"
                              value={formData.expensedetails}
                              onChange={handleChange}
                        />
                        <input
                              type="number"
                              name="amount"
                              placeholder="Amount"
                              className="w-full h-12 shadow-xl px-3 mb-3"
                              value={formData.amount}
                              onChange={handleChange}
                        />
                  </form>
                  <button type="submit" onClick={handleSubmit} className="btn btn-ghost btn-wide">Add</button>
            </div>
      );
}

export default Form;
