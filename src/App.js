import React, { useState } from "react";
import { AnnualExpenses } from "./components/annualExpenses";
import './App.css';
import { MonthlyExpenses } from "./components/monthlyExpenses";
import { TotalSavings } from "./components/totalSavings";

function App() {
  const [totalIncome, setTotalIncome] = useState(0);
  const [incomeAfterDeductions, setIncomeAfterDeductions] = useState(0);
  const [totalMonthlyExpenses, setTotalMonthlyExpenses] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);
  const [remainingMonthly, setRemainingMonthly] = useState(0);

  const handleIncome = (e) => {
    setTotalIncome(Number(e.target.value));
    // console.log(totalIncome)
  }


  return (
    <div className="App">
      <div>
        Total Income Before Tax
        <input type="text" value={totalIncome} placeholder="0" onChange={handleIncome} name="Total Income" />
      </div>
      <AnnualExpenses
        totalIncome={totalIncome}
        setIncomeAfterDeductions={setIncomeAfterDeductions}
        incomeAfterDeductions={incomeAfterDeductions}
      />
      <MonthlyExpenses
        incomeAfterDeductions={incomeAfterDeductions}
        totalMonthlyExpenses={totalMonthlyExpenses}
        setTotalMonthlyExpenses={setTotalMonthlyExpenses}
      />
      <TotalSavings
        totalSavings={totalSavings}
        setTotalSavings={setTotalIncome}
        totalMonthlyExpenses={totalMonthlyExpenses}
        setTotalMonthlyExpenses={setTotalMonthlyExpenses}
      />
    </div>
  );
}

export default App;
