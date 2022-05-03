import React, { useState } from "react";

export const AnnualExpenses = ({ totalIncome, setIncomeAfterDeductions, incomeAfterDeductions }) => {
    const taxBrackets = {
        "10%": 0.10,
        "12%": 0.12,
        "22%": 0.22,
        "24%": 0.24,
        "32%": 0.32,
        "35%": 0.35,
        "37%": 0.37
    };

    const single = [9950, 40525, 86375, 164925, 209425, 523600];
    const marriedSeparate = [9950, 40525, 86375, 164925, 209425, 523600];
    const marriedJoint = [1990, 81050, 172750, 329850, 418850, 628300];
    const houseHead = [14200, 54200, 86350, 164900, 209400, 523600];
    const stateRates = {

    }
    const ficaAmount = (totalIncome > 0 ? (totalIncome * (0.153 / 2)) : (0));
    const taxBracketDeduction = 0;
    return (
        <div>
            <div>Annual Expenses</div>
            <div>
                <p>FICA Percentage</p>
                <p>{ficaAmount}</p>
            </div>
            <div>
                <p>Tax Bracket</p>
                <div>
                    <p>Filing</p>
                    <p>Single</p>
                    <p>Married Filing Jointly</p>
                    <p>Married Filing Separately</p>
                    <p>Head of Household</p>
                </div>
                <div>
                    <p>PreTax Contributions and Deductions</p>
                    <p>Pre-Tax 401(k) Contributions</p>
                    <p>Pre-Tax Traditional IRA Contributions</p>
                    <p>Pre-Tax Childcare Expenses</p>
                    <p>Total Expected Self-Employment Income</p>
                </div>
                <p>Tax Bracket Deductions</p>
            </div>
            <div>
                Tax Rates
                <p>State List</p>
                <p>Local</p>
            </div>
        </div>
    )
}