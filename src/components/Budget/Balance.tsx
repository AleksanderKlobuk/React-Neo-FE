import React from "react";
import { GlobalContext } from "../../features/GlobalState";
import '../../Styles/Budget.css';
import { BudgetProps } from "../../model";


const Balance= () => {
  const { incomeTransactions, expenseTransactions } =React.useContext<BudgetProps>(GlobalContext);

  const incomeAmounts = incomeTransactions.map(
    incomeTransaction => incomeTransaction.incomeAmount
  );

  const expenseAmounts = expenseTransactions.map(
    expenseTransaction => expenseTransaction.expenseAmount
  );

  const totalIncome = incomeAmounts
    .reduce((acc:number, item:number) => (acc += item), 0)
    .toFixed(2);

  const totalExpenses = expenseAmounts
    .reduce((acc:number, item:number) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="balance" data-testid= "Balance-Render-Test">
      <h2>Your Balance</h2>
      <h3>${(totalIncome - totalExpenses).toFixed(2)}</h3>
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p>+${totalIncome}</p>
        </div>
        <div className="minus">
          <h3>Expenses</h3>
          <p role="contentinfo">-${totalExpenses}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
