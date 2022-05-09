import React from "react";
import { GlobalContext } from "../../features/GlobalState";
import '../../Styles/Budget.css';

const IncomeTransaction = ({ incomeTransaction }) => {
  const { deleteTransaction } = React.useContext<any>(GlobalContext);

  return (
    <li className="transaction">
      <span className="transaction-text">{incomeTransaction.incomeText}</span>
      <span className="transaction-amount">
        ${incomeTransaction.incomeAmount}
      </span>
      <button
        onClick={() => deleteTransaction(incomeTransaction.id)}
        className="delete-btn"
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default IncomeTransaction;
