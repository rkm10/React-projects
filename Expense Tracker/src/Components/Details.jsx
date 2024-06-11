import { useContext } from 'react';
import { FilteredDataContext } from './ExpenseHistory';

export default function Details() {
      const { filteredData, deleteData } = useContext(FilteredDataContext);

      return (
            <>
                  {filteredData && filteredData.map((item) => {
                        const isIncome = item.amount > 0;
                        const containerClass = isIncome ? 'Expense-details-container-green' : 'Expense-details-container-red';
                        const divClass = isIncome ? 'green-div' : 'red-div';

                        return (
                              <div className={containerClass} id="expense-details" key={item.id}>
                                    <div id={divClass}></div>
                                    <div className="Expense-details-card">
                                          <h1>{item.expensedetails}</h1>
                                          <h2>₹ {item.amount}</h2>
                                          <p>{item.date}, {item.time}</p>
                                    </div>
                                    <button className="btn btn-sm btn-error" onClick={() => deleteData(item.id)}>💣</button>
                              </div>
                        );
                  })}
            </>
      );
}
