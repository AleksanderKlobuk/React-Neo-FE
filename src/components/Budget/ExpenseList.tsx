import React, {FC} from "react";
import  { useContext } from "react";
import { GlobalContext } from "../../features/GlobalState";
import ExpenseTransaction from "./ExpenseTransaction";
import '../../Styles/Budget.css';
import { BudgetProps } from "../../model";


const ExpenseList:FC = ():JSX.Element => {
  const { expenseTransactions } = useContext<BudgetProps>(GlobalContext);

  console.log(expenseTransactions);

  return (
    <div className="transactions transactions-expense">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {expenseTransactions.map(expenseTransaction => (
          <ExpenseTransaction
            key={expenseTransaction.id}
            expenseTransaction={expenseTransaction}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
