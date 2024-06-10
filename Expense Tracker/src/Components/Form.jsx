export default function Form() {
      return (
            <>
                  <div className="flex card w-4/12 shadow-xl items-center gap-3 p-5 border-2 border-white" style={{ height: "60vh" }} >
                        <h2 className="card-title mb-6">Add Expense</h2>
                        <input type="text" name="Expense Details" id="" placeholder="Expense Details" className="w-full h-12 shadow-xl items-center px-3" />
                        <input type="number" name="Amount" id="" placeholder="Amount" className="w-full h-12 shadow-xl px-3" />
                        <button className="btn btn-ghost btn-wide">Ghost</button>
                  </div>
            </>
      )

}