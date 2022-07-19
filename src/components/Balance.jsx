/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { balanceContext } from '../context/GlobalProvider';

function Balance() {
  const balance = useContext(balanceContext);
  return (
    <>
      <h4>Your Balance</h4>
      <h2>
        {balance.balance >= 0
          ? balance.moneyFormatter(balance.balance)
          : '-' + balance.moneyFormatter(balance.balance)}
      </h2>
    </>
  );
}

export default Balance;
