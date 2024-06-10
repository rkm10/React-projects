import Details from "./Details"

export default function ExpenseHistory() {
      return (
            <>
                  <div className="flex card w-4/12 shadow-xl items-center gap-3  py-5 border-2 border-white" style={{ height: "60vh" }}>
                        <h1 className="card-title mb-6">Expense History</h1>

                        <div className="w-full overflow-y-scroll overflow-x-hidden px-5 " style={{ height: "100vh" }} >
                              <Details />
                        </div>
                  </div>
            </>
      )
}