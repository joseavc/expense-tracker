import React, { useContext } from 'react';
import { historyContext } from '../context/GlobalProvider';
function TransactionHistory() {
  const history = useContext(historyContext);

  const deleteTransaction = (e, id) => {
    e.preventDefault();
    history.setHistory(history.history.filter((transaction) => transaction.id != id));
  };
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {history.history.map((item) => (
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
