/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { balanceContext } from '../context/GlobalProvider';

function IncomeExpenses() {
  const incomeExpenses = useContext(balanceContext);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{incomeExpenses.moneyFormatter(incomeExpenses.income)} </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-{incomeExpenses.moneyFormatter(incomeExpenses.expense)}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
