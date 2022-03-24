import {  useState } from "react";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../../features/GlobalState";
import '../../Styles/Budget.css';



const AddTransaction = () => {
  const { addIncome, addExpense } = React.useContext<any >(GlobalContext);

  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
  });

  const { incomeText, incomeAmount } = income;

  const onChangeIncome = (e:any) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  const onSubmitIncome = (e:any) => {
    e.preventDefault();

    if (incomeText !== "") {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText,
        incomeAmount: incomeAmount * 1,
      };

      addIncome(newIncomeTransaction);

      setIncome({
        incomeText: "",
        incomeAmount: 0,
      });
    }
  };

  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0,
  });

  const { expenseText, expenseAmount } = expense;

  const onChangeExpense = (e:any) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const onSubmitExpense = (e:any) => {
    e.preventDefault();

    if (expenseText !== "") {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText,
        expenseAmount: expenseAmount * 1,
      };

      addExpense(newExpenseTransaction);

      setExpense({
        expenseText: "",
        expenseAmount: 0,
      });
    }
  };

  return (
    <div className="form-wrapper" data-testid="Card-Render-Test">
      <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <input
            type="text"
            name="incomeText"
            value={incomeText}
            placeholder="Add Income..."
            autoComplete="off"
            onChange={onChangeIncome}
            data-testid="input-Income-Text"
          />
          <input
            type="number"
            name="incomeAmount"
            value={incomeAmount}
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeIncome}
            data-testid="input-Income-Amount"
          />
          <input type="submit" value="Submit" data-testid="Submit-Income-Button" />
        </div>
      </form>
      <form onSubmit={onSubmitExpense}>
        <div className="input-group expense">
          <input
            type="text"
            name="expenseText"
            value={expenseText}
            placeholder="Add Expense..."
            autoComplete="off"
            onChange={onChangeExpense}
            data-testid="input-Expense-Text"
          />
          <input
            type="number"
            name="expenseAmount"
            value={expenseAmount}
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeExpense}
            data-testid="input-Expense-Amount"
          />
          <input type="submit" value="Submit" data-testid="Submit-Expense-Button" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
