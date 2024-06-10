export default function Details() {
      return (
            <>
                  <div className="Expense-details-container-green" id="expense-details">
                        <div id="green-div"></div>
                        <div className="Expense-details-card">
                              <h1>Account balance</h1>
                              <h2>$89,400</h2>
                              <p>6/10/2024, 3:56:40 PM</p>
                        </div>
                        <button className="btn btn-sm btn-error">💣</button>
                  </div>
                  <div className="Expense-details-container-red" id="expense-details">
                        <div id="red-div"></div>
                        <div className="Expense-details-card">
                              <h1>Account balance</h1>
                              <h2>-$89,400</h2>
                              <p>6/10/2024, 3:56:40 PM</p>
                        </div>
                        <button className="btn btn-sm btn-error">💣</button>
                  </div>
            </>
      )
}