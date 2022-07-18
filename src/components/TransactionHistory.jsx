/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { transactionContext } from '../context/GlobalProvider';

function TransactionHistory() {
  const history = useContext(transactionContext);

  const deleteTransaction = (e, id) => {
    e.preventDefault();
    history.setTransactionHistory(history.transactionHistory.filter((item) => item.id != id));
  };

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {history.transactionHistory.map((item) => (
          <li key={item.id} className={item.amount < 0 ? 'minus' : 'plus'}>
            {item.description} <span>{item.amount}</span>
            <button onClick={(e) => deleteTransaction(e, item.id)} className="delete-btn">
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionHistory;
