/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { balanceContext } from '../context/GlobalProvider';

function Balance() {
  const balance = useContext(balanceContext);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>$0</h1>
    </>
  );
}

export default Balance;
