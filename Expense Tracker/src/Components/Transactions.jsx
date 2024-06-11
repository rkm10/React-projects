import { useContext } from 'react';
import { ExpenseTrackerContext } from '../MainApp';


export default function Transactions() {
      const { data } = useContext(ExpenseTrackerContext);

      const totalIncome = data.reduce((total, item) => total + (Number(item.amount) > 0 ? Number(item.amount) : 0), 0);
      const totalExpense = data.reduce((total, item) => total + (Number(item.amount) < 0 ? Number(item.amount) : 0), 0);

      return (
            <div className="stats bg-primary text-primary-content my-5 ">
                  <div className="stat">
                        <div className="stat-title">Total Income</div>
                        <div className="stat-value text-green-600">₹ {totalIncome}</div>
                  </div>
                  <div className="stat">
                        <div className="stat-title">Total Expenses</div>
                        <div className="stat-value text-red-600">₹ {totalExpense}</div>
                  </div>
            </div>
      );
}
