/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';

export const transactionContext = createContext();
export const balanceContext = createContext();

export const GlobalProvider = ({ children }) => {
  // States
  const [transactionHistory, setTransactionHistory] = useState(
    JSON.parse(localStorage.getItem('BALANCE')) || []
  );
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  //useEffect
  useEffect(() => {
    const amounts = transactionHistory.map((item) => item.amount);
    let inc = 0;
    let expe = 0;
    setBalance(amounts.reduce((prev, curr) => prev + curr, 0));

    for (let i = 0; i < amounts.length; i++) {
      if (amounts[i] > 0) {
        inc = inc + amounts[i];
      } else {
        expe = expe + amounts[i];
      }
    }

    setIncome(inc);
    setExpense(expe);
    localStorage.setItem('BALANCE', JSON.stringify(transactionHistory));
  }, [transactionHistory]);

  function moneyFormatter(num) {
    let p = num.toFixed(2).split('.');
    return (
      '$ ' +
      p[0]
        .split('')
        .reverse()
        .reduce(function (acc, num, i, orig) {
          return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
        }, '') +
      '.' +
      p[1]
    );
  }

  //Save to local
  const saveLocalBalance = () => {
    console.log('SaveLocal');
    localStorage.setItem('BALANCE', JSON.stringify(transactionHistory));
  };

  return (
    <transactionContext.Provider
      value={{ transactionHistory, setTransactionHistory, moneyFormatter }}>
      <balanceContext.Provider value={{ income, expense, balance, moneyFormatter }}>
        {children}
      </balanceContext.Provider>
    </transactionContext.Provider>
  );
};

export default GlobalProvider;
