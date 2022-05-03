import React, { useState } from "react";

export const MonthlyExpenses = ({ incomeAfterDeductions, totalMonthlyExpenses, setTotalMonthlyExpenses }) => {

    return (
        <div>
            <div>Monthly Expenses</div>
            <div>
                <p>Rent / Housing</p>
                <input type="text" />
            </div>
            <div>
                <p>Utilities</p>
                <input type="text" />
            </div>
            <div>
                <p>Food</p>
                <input type="text" />
            </div>
            <div>
                <p>Transportation</p>
                <input type="text" />
            </div>
            <div>
                <p>Medical</p>
                <input type="text" />
            </div>
            <div>
                <p>Clothing</p>
                <input type="text" />
            </div>
            <div>
                <p>Personal</p>
                <input type="text" />
            </div>
            <div>
                <p>Miscellaneous</p>
                <input type="text" />
            </div>
        </div>
    )
}