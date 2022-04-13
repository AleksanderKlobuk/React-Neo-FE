import React from "react";
import { GlobalContext } from "../../features/GlobalState";
import '../../Styles/Budget.css';




const ExpenseTransaction = ({ expenseTransaction }) => {
  const { deleteTransaction } = React.useContext<any>(GlobalContext);

  return (
    <li className="transaction" title="ExpenseButton">
      <span className="transaction-text">{expenseTransaction.expenseText}</span>
      <span className="transaction-amount">
        ${expenseTransaction.expenseAmount}
      </span>
      <button
        onClick={() => deleteTransaction(expenseTransaction.id)}
        className="delete-btn"
        
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default ExpenseTransaction;
