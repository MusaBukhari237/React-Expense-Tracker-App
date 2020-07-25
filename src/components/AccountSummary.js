// Import React and Global State
import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

function AccountSummary() {
    let { transactions } = useContext(GlobalContext);

    let transactionAmounts = transactions.map(transaction => transaction.transactionAmount);

    let income = transactionAmounts
        .filter(transaction => transaction > 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        .toFixed(2);

    let expense = Math.abs(transactionAmounts.filter(transaction => transaction < 0)
    .reduce((acc, transaction) => (acc += transaction), 0)
        ).toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{income}</p>
            </div>
            <div>
                <h4>Expense</h4> 
                <p className="money minus">{expense}</p>
            </div>
        </div>
    )
}


export default AccountSummary;
