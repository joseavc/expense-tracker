/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { historyContext, balanceContext } from '../context/GlobalProvider';

function IncomeExpenses() {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">$0 </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-$0</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
