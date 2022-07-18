/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';

export const globalContext = createContext();
export const historyContext = createContext();
export const balanceContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);
  //   //Run Once
  //   useEffect(() => {
  //     getLocalBalance();
  //   }, []);
  //   //Use effect
  //   useEffect(() => {
  //     saveLocalBalance();
  //   }, [history]);
  function addTransaction(nTransaction) {
    setHistory([...history, nTransaction]);
  }
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

  //   //Save to local
  //   const saveLocalBalance = () => {
  //     if (history.length > 0) {
  //       console.log('hi');
  //       localStorage.setItem('balance', JSON.stringify(history));
  //     }
  //   };
  //   const getLocalBalance = () => {
  //     if (localStorage.getItem('balance') === null) {
  //       localStorage.setItem('balance', JSON.stringify([]));
  //     } else {
  //       let balanceLocal = JSON.parse(localStorage.getItem('balance'));

  //       setHistory(balanceLocal);
  //     }
  //   };

  return (
    <globalContext.Provider value={addTransaction}>
      <historyContext.Provider value={{ history, setHistory }}>
        <balanceContext.Provider
          value={{ income, setIncome, expense, setExpense, balance, setBalance, moneyFormatter }}>
          {children}
        </balanceContext.Provider>
      </historyContext.Provider>
    </globalContext.Provider>
  );
};

export default GlobalProvider;
