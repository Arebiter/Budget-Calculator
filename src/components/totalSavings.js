import React, { useState } from "react";

export const TotalSavings = ({ totalMonthlyExpenses, totalSavings, setTotalSavings }) => {

    return (
        <div>
            <div>Savings</div>
            <div>
                <p>Emergency</p>
                <input type="text" />
            </div>
            <div>
                <p>Investments</p>
                <input type="text" />
            </div>
            <div>
                <p>Retirement</p>
                <input type="text" />
            </div>
        </div>
    )
}