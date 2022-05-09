import React from "react";
import { GlobalContext } from "../../features/GlobalState";
import IncomeTransaction from "./IncomeTransaction";
import '../../Styles/Budget.css';
import { BudgetProps } from "../../model";

const IncomeList  = () => {
  const { incomeTransactions } = React.useContext<BudgetProps>(GlobalContext);

  console.log(incomeTransactions);

  return (
    <div className="transactions transactions-income">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {incomeTransactions.map(incomeTransaction => (
          <IncomeTransaction
            key={incomeTransaction.id}
            incomeTransaction={incomeTransaction}
          />
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
