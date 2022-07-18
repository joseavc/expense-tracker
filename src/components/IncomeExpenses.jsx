/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { historyContext, balanceContext } from '../context/GlobalProvider';

function IncomeExpenses() {
  const history = useContext(historyContext);
  const balance = useContext(balanceContext);
  const [listAmounts, setListAmounts] = useState([]);

  const getIncomeExpenses = () => {
    let inc = 0;
    let expe = 0;
    for (var i = 0; i < listAmounts.length; i++) {
      if (listAmounts[i] >= 0) {
        inc = inc + listAmounts[i];
      } else {
        expe = expe + listAmounts[i];
      }
    }
    balance.setIncome(inc);
    balance.setExpense(expe);
    console.log(balance.income);
  };
  useEffect(() => {
    setListAmounts(
      history.history.map(function (item) {
        return parseFloat(item.amount);
      })
    );

    getIncomeExpenses();
    balance.setBalance(
      listAmounts.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    );
  }, [history.history]);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{balance.moneyFormatter(balance.income)} </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-{balance.moneyFormatter(balance.expense)}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
