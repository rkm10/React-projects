import { useContext } from 'react';
import { ExpenseTrackerContext } from '../MainApp';

export default function Transactions() {
      const { data, handleFilterChange } = useContext(ExpenseTrackerContext);

      const totalIncome = data.reduce((total, item) => total + (Number(item.amount) > 0 ? Number(item.amount) : 0), 0);
      const totalExpense = data.reduce((total, item) => total + (Number(item.amount) < 0 ? Number(item.amount) : 0), 0);

      return (
            <div className="stats text-primary-content my-5">
                  <div className="stat" onClick={() => handleFilterChange({ target: { value: "Income" } })}>
                        <div className="stat-title text-white">Total Income</div>
                        <div className="stat-value text-green-400">₹ {totalIncome}</div>
                  </div>
                  <div className="stat" onClick={() => handleFilterChange({ target: { value: "Expense" } })}>
                        <div className="stat-title text-white">Total Expenses</div>
                        <div className="stat-value text-red-600">₹ {totalExpense}</div>
                  </div>
            </div>
      );
}
