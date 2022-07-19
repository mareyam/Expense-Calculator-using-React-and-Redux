import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div className="income">
        <h4>Income</h4>
        <p className="money_plus">${income}</p>
      </div>
      <div className="expense">
        <h4>Expense</h4>
        <p className="money_minus">-${expense}</p>
      </div>
    </div>
  );
};
export default IncomeExpenses;
