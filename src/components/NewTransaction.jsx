/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { globalContext } from '../context/GlobalProvider';

function NewTransaction() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const addTransaction = useContext(globalContext);
  const onSubmit = (e) => {
    e.preventDefault();

    const nTransaction = {
      id: Math.floor(Math.random() * 10000),
      description: text,
      amount: amount
    };

    addTransaction(nTransaction);
    setText('');
    setAmount(0);
  };
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (positive - income, negative - expense)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}

export default NewTransaction;
