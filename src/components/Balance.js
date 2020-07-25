// Import React and GlobalState
import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


function Balance(){

    let { transactions } = useContext(GlobalContext);
    let transactionAmounts = transactions.map(transaction => transaction.transactionAmount);
    let balance = transactionAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    

    return (
        <div>
            <h4>Current Balance</h4>
            <h2 id="balance">PKR : {balance}</h2>
        </div>
    )
}


export default Balance;