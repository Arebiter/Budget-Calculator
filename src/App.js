import React, { useState } from "react"
import './App.css';

function App() {
  const { totalIncome, setTotalIncome } = useState(0);
  const { incomeAfterDeductions, setIncomeAfterDeductions } = useState(0);
  const { totalMonthlyExpense, setTotalMonthlyExpenses } = useState(0);
  const { totalSavings, setTotalSavings } = useState(0);
  const { remainingMonthly, setRemainingMonthly } = useState(0);


  return (
    <div className="App">
      <div>
        Total Income Before Tax
        <input type="text" value={totalIncome} placeholder="0"></input>
      </div>
      <div>
        Annual Expenses
        <p>FICA percentage</p>
        <p>Exemptions</p>
        <p>Standard Deductions</p>
        <p>Tax Bracket</p>
        <div>
          Tax Rates
          <p>Federal</p>
          <p>State</p>
          <p>Local</p>
        </div>
      </div>
      <div>
        Monthly Expenses
        <p>Rent/housing</p>
        <p>Food</p>
        <p>transportation</p>
        <p>Medical</p>
        <p>personal</p>
        <p>clothing</p>
        <p>utilities</p>
        <p>Extra</p>
      </div>
      <div>
        Savings
        <p>Emergency</p>
        <p>Investments</p>
        <p>Retirement</p>
      </div>
    </div>
  );
}

export default App;
